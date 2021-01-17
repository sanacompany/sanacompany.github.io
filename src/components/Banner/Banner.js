import React from 'react'
import LottiePlayer from 'components/Shared/LottiePlayer'
import animationData from './animation.json'

export default function Banner() {
  return (
    <div className="banner">
      <LottiePlayer animationData={animationData} className="banner__animation" />
    </div>
  )
}
