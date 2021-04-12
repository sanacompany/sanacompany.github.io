import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

const MARIA = 'María'

function Member({ name, picture, hover, position }) {
  const [image, setImage] = useState(picture)

  const hoverPicture = useCallback(
    () => setImage(hover),
    [hover],
  )

  const originalPicture = useCallback(
    () => setImage(picture),
    [picture],
  )

  return (
    <div
      className={`member  ${name === MARIA ? 'member--maria' : ''}`}
      onFocus={hoverPicture}
      onHover={hoverPicture}
      onBlur={originalPicture}
      onMouseOver={hoverPicture}
      onMouseOut={originalPicture}
    >
      <div className="member__shadow" />
      <img
        className="member__picture"
        src={image}
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
  hover: PropTypes.string,
  position: PropTypes.string.isRequired
}

export default Member
