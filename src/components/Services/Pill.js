import React, { memo } from 'react'
import PropTypes from 'prop-types'

function Pill({ icon, text, title, className }) {
  return (
    <div className="pill">
      <div className="pill__icon">
        <img src={icon} className={`pill__img ${className}`} alt="" />
      </div>
      <span className="pill__title">{title}</span>
      <p className="pill__text">{text}</p>
    </div>
  )
}

Pill.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default memo(Pill)
