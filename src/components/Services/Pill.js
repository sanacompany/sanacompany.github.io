import React, { memo } from 'react'
import PropTypes from 'prop-types'

function Pill({ animations, icon, text, title, className }) {
  return (
    <div className="pill">
      <div className="pill__icon">
        <img src={icon} className={`pill__img ${className}`} alt="" />
      </div>
      <span className="pill__title">{title}</span>
      <div className="pill__text">{text}</div>
      {animations}
    </div>
  )
}

Pill.propTypes = {
  animations: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default memo(Pill)
