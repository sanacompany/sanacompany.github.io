import React from 'react'
import Lottie from 'lottie-react'
import PropTypes from 'prop-types'

export default function LottiePlayer({ animationData, className }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData
  }

  return (
    <div className={className}>
      <Lottie
        loop={defaultOptions.loop}
        autoPlay={defaultOptions.autoplay}
        animationData={animationData}
      />
    </div>
  )
}

LottiePlayer.propTypes = {
  animationData: PropTypes.objectOf(PropTypes.object).isRequired,
  className: PropTypes.string
}

LottiePlayer.defaultProps = { className: '' }
