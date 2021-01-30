import React from 'react'
import { ReactComponent as Logo } from 'assets/images/logo.svg'

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <button type="button" className="btn header__logo-link">
          <Logo className="header__logo" />
        </button>
        <ul className="header__list">
          <li className="header__item">
            <a href="#services" className="header__link">
              Services
            </a>
          </li>
          <li className="header__item">
            <a href="#portfolio" className="header__link">
              Portfolio
            </a>
          </li>
          <li className="header__item">
            <a href="#team" className="header__link">
              Team
            </a>
          </li>
          <li className="header__item">
            <a href="#contact" className="header__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
