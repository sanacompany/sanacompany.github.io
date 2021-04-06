import React, { useEffect, useCallback, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { HOME } from 'constants/Urls'
import * as SECTIONS from 'constants/Sections'

export default function Header() {
  const [section, setSection] = useState(null)

  const location = useLocation()

  const activeSection = useCallback(
    (compare) => (
      compare === section ? 'header__link--active' : ''
    ),
    [section],
  )

  useEffect(() => {
    const id = location.hash.slice(1)
    const { pathname } = location

    if (id && pathname === HOME) {
      setSection(id)
    } else {
      setSection(null)
    }
  }, [location])

  return (
    <div className="header">
      <div className="header__content">
        <Link
          className="btn header__logo-link"
          to={HOME}
        >
          <Logo className="header__logo" />
        </Link>
        <ul className="header__list">
          <li className="header__item">
            <a
              href={`${HOME}#services`}
              className={`header__link ${activeSection(SECTIONS.SERVICES)}`}
            >
              Services
            </a>
          </li>
          <li className="header__item">
            <a
              href={`${HOME}#team`}
              className={`header__link ${activeSection(SECTIONS.TEAM)}`}
            >
              Team
            </a>
          </li>
          <li className="header__item">
            <a
              href={`${HOME}#portfolio`}
              className={`header__link ${activeSection(SECTIONS.PORTFOLIO)}`}
            >
              Portfolio
            </a>
          </li>
          <li className="header__item">
            <a
              href={`${HOME}#contact`}
              className={`header__link ${activeSection(SECTIONS.CONTACT)}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
