import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { HOME } from 'constants/Urls'

export default function Header() {
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
