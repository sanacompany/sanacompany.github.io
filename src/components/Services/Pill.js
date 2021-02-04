import React, { memo } from 'react'
import PropTypes from 'prop-types'

function Pill({ icon, text, title }) {
  return (
    <div className="pill">
      <div className="pill__icon">
        <img src={icon} alt="" />
      </div>
      <span className="pill__title">
        {title}
      </span>
      <p className="pill__text">
        {text}
      </p>
    </div>
  )
}

Pill.propTypes = {
  icon: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default memo(Pill)
