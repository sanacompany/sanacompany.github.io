import React from 'react'
import PropTypes from 'prop-types'

function Member({ name, picture, position }) {
  return (
    <div className="member">
      <img
        className="member__picture"
        src={picture}
        alt="Member ilustration"
      />
      <span className="member__position">{position}</span>
      <span className="member__name">{name}</span>
    </div>
  )
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

export default Member
