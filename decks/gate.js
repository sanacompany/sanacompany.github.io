/*
 * /decks/ gate. Every public file under /decks/ is ciphertext; this script
 * turns the password into the AES key that opens them.
 *
 *   password --PBKDF2-SHA256--> master --HKDF--> AES-256-GCM key
 *
 * The key (never the password) is cached in localStorage so the index and
 * every deck open without asking again on this browser. "Lock" forgets it.
 */
;(() => {
  'use strict'

  const cfg = JSON.parse(document.getElementById('vault-config').textContent)
  const subtle = window.crypto && window.crypto.subtle
  const utf8 = new TextEncoder()
  const text = new TextDecoder()
  const $ = (id) => document.getElementById(id)

  const form = $('gate-form')
  const input = $('gate-password')
  const toggle = $('gate-toggle')
  const msg = $('gate-msg')
  const busyText = $('gate-busy')
  const library = $('library')

  // ---- state ----------------------------------------------------------------

  function setState(state, note, tone) {
    document.body.dataset.state = state
    if (state === 'busy') busyText.textContent = note || 'Unlocking…'
    if (state === 'locked') {
      msg.textContent = note || ''
      msg.dataset.tone = tone || 'error'
      window.requestAnimationFrame(() => input.focus())
    }
  }

  function fail(note) {
    setState('locked', note)
    form.classList.remove('is-wrong')
    void form.offsetWidth // restart the shake animation
    form.classList.add('is-wrong')
    input.select()
  }

  // ---- key storage (key bytes only, never the password) --------------------

  const stores = () =>
    ['localStorage', 'sessionStorage'].map((name) => {
      try {
        return window[name]
      } catch (_e) {
        return null
      }
    })

  const keyStore = {
    get() {
      for (const s of stores()) {
        try {
          const v = s && s.getItem(cfg.storeKey)
          if (v) return v
        } catch (_e) {
          /* blocked */
        }
      }
      return null
    },
    set(value) {
      for (const s of stores()) {
        try {
          s.setItem(cfg.storeKey, value)
          return
        } catch (_e) {
          /* try the next one */
        }
      }
    },
    clear() {
      for (const s of stores()) {
        try {
          s && s.removeItem(cfg.storeKey)
        } catch (_e) {
          /* blocked */
        }
      }
    },
  }

  const toB64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)))
  const fromB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0))

  // ---- crypto -----------------------------------------------------------------

  async function deriveKey(password) {
    const base = await subtle.importKey(
      'raw',
      utf8.encode(password.normalize('NFC')),
      'PBKDF2',
      false,
      ['deriveBits'],
    )
    const bits = await subtle.deriveBits(
      { name: 'PBKDF2', hash: 'SHA-256', salt: fromB64(cfg.salt), iterations: cfg.iterations },
      base,
      256,
    )
    const hkdf = await subtle.importKey('raw', bits, 'HKDF', false, ['deriveKey'])
    return subtle.deriveKey(
      { name: 'HKDF', hash: 'SHA-256', salt: new Uint8Array(0), info: utf8.encode(cfg.info) },
      hkdf,
      { name: 'AES-GCM', length: 256 },
      true,
      ['decrypt'],
    )
  }

  const importKey = (raw) => subtle.importKey('raw', raw, { name: 'AES-GCM' }, true, ['decrypt'])

  async function fetchBytes(url) {
    const res = await fetch(url, { credentials: 'same-origin' })
    if (!res.ok) {
      const err = new Error('HTTP ' + res.status + ' for ' + url)
      err.network = true
      throw err
    }
    return new Uint8Array(await res.arrayBuffer())
  }

  async function decrypt(key, data) {
    return subtle.decrypt({ name: 'AES-GCM', iv: data.subarray(0, 12) }, key, data.subarray(12))
  }

  // Wrong key => AES-GCM authentication fails with an OperationError.
  const isWrongKey = (err) => err && err.name === 'OperationError'

  async function readManifest(key) {
    const data = await fetchBytes(cfg.manifest)
    return JSON.parse(text.decode(await decrypt(key, data)))
  }

  // ---- views ------------------------------------------------------------------

  function currentPath() {
    let p = decodeURIComponent(window.location.pathname)
    if (p.endsWith('/')) p += 'index.html'
    return p
  }

  async function enter(key, manifest) {
    const path = currentPath()
    if (path === cfg.root + 'index.html') return renderLibrary(manifest)

    const page = manifest.pages[path]
    if (!page) return renderMissing()

    setState('busy', 'Opening deck…')
    const html = text.decode(await decrypt(key, await fetchBytes(cfg.bin + page.id + '.bin')))
    window.__sanaVault = { key }
    document.open()
    document.write(html)
    document.close()
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag)
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue
      if (k === 'text') node.textContent = v
      else node.setAttribute(k, v === true ? '' : v)
    }
    for (const child of [].concat(children || [])) if (child) node.append(child)
    return node
  }

  function formatDate(iso) {
    if (!iso) return null
    const d = new Date(iso + 'T12:00:00')
    if (Number.isNaN(d.getTime())) return null
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  async function copy(url, button) {
    let ok = false
    try {
      await navigator.clipboard.writeText(url)
      ok = true
    } catch (_e) {
      const tmp = el('textarea', { readonly: true, 'aria-hidden': 'true' })
      tmp.value = url
      tmp.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
      document.body.append(tmp)
      tmp.select()
      try {
        ok = document.execCommand('copy')
      } catch (_err) {
        ok = false
      }
      tmp.remove()
    }
    const label = button.textContent
    button.textContent = ok ? 'Link copied' : 'Copy failed'
    button.classList.toggle('is-done', ok)
    window.setTimeout(() => {
      button.textContent = label
      button.classList.remove('is-done')
    }, 1800)
  }

  function renderLibrary(manifest) {
    const list = $('library-list')
    list.replaceChildren()
    for (const deck of manifest.decks) {
      const [first, ...rest] = deck.pages
      const updated = formatDate(deck.updated)
      const shareUrl = new URL(first.url, window.location.origin).href
      const copyBtn = el('button', { type: 'button', class: 'link-btn', text: 'Copy link' })
      copyBtn.addEventListener('click', () => copy(shareUrl, copyBtn))

      list.append(
        el('li', { class: 'deck' }, [
          el('div', { class: 'deck__meta' }, [
            ...deck.languages.map((l) => el('span', { class: 'chip', text: l })),
            updated && el('span', { class: 'deck__date', text: 'Updated ' + updated }),
          ]),
          el('h2', { class: 'deck__title' }, [
            el('a', { href: first.url, class: 'deck__link', text: deck.title }),
          ]),
          deck.description && el('p', { class: 'deck__desc', text: deck.description }),
          el('div', { class: 'deck__actions' }, [
            el('a', { href: first.url, class: 'btn btn--sm', text: first.label || 'Open deck' }),
            ...rest.map((p) =>
              el('a', { href: p.url, class: 'btn btn--ghost btn--sm', text: p.label }),
            ),
            copyBtn,
          ]),
        ]),
      )
    }
    $('library-count').textContent =
      manifest.decks.length === 1 ? '1 deck' : manifest.decks.length + ' decks'
    library.hidden = false
    setState('library')
    document.title = 'Decks · SANA'
  }

  function renderMissing() {
    setState('missing')
  }

  // ---- boot -------------------------------------------------------------------

  toggle.addEventListener('click', () => {
    const show = input.type === 'password'
    input.type = show ? 'text' : 'password'
    toggle.textContent = show ? 'Hide' : 'Show'
    toggle.setAttribute('aria-pressed', String(show))
    toggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password')
    input.focus()
  })

  $('lock-btn').addEventListener('click', () => {
    keyStore.clear()
    input.value = ''
    library.hidden = true
    setState('locked', 'Locked. Enter the password to open the decks again.', 'info')
  })

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const password = input.value
    if (!password) return fail('Enter the password to continue.')
    setState('busy', 'Unlocking…')
    try {
      const key = await deriveKey(password)
      const manifest = await readManifest(key)
      keyStore.set(toB64(await subtle.exportKey('raw', key)))
      await enter(key, manifest)
    } catch (err) {
      if (isWrongKey(err)) return fail('That password did not work. Check it and try again.')
      console.error('[decks]', err)
      fail('Could not load the decks. Check your connection and try again.')
    }
  })

  async function boot() {
    if (!subtle || !window.TextEncoder) {
      setState('locked')
      form.hidden = true
      msg.textContent =
        'This browser cannot open encrypted decks. Please use an up-to-date browser.'
      return
    }
    const cached = keyStore.get()
    if (!cached) return setState('locked')
    setState('busy', 'Unlocking…')
    try {
      const key = await importKey(fromB64(cached))
      await enter(key, await readManifest(key))
    } catch (err) {
      if (err && err.network) {
        console.error('[decks]', err)
        return setState('locked', 'Could not load the decks. Check your connection and try again.')
      }
      // Stale key (the password changed) or corrupt storage: ask again.
      keyStore.clear()
      setState('locked')
    }
  }

  // Coming back via the back button restores this page from bfcache with the
  // old state; re-run so a deck that was locked meanwhile asks again.
  window.addEventListener('pageshow', (event) => {
    if (event.persisted && document.body.dataset.state !== 'library') boot()
  })

  boot()
})()
