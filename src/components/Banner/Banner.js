import React from 'react'
import LottiePlayer from 'components/Shared/LottiePlayer'
import animationData from './animation.json'

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__title">
        We make your ideas
        <span className="banner__title text-secondary"> true</span>
      </div>
      <LottiePlayer animationData={animationData} className="banner__animation" />
    </div>
  )
}
