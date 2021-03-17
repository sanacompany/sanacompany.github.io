import React, { useRef } from 'react'
import PropTypes from 'prop-types'

function Member({ name, picture, hover, position }) {
  const imgRef = useRef(null)

  const hoverPicture = () => {
    imgRef.current.src = hover
    return imgRef
  }

  const originalPicture = () => {
    imgRef.current.src = picture
    return imgRef
  }

  return (
    <div className="member">
      <img
        className="member__picture"
        ref={imgRef}
        src={picture}
        onFocus={hoverPicture}
        onBlur={originalPicture}
        onMouseOver={hoverPicture}
        onMouseOut={originalPicture}
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
