import React from 'react'

import BallFigure from 'assets/images/figures/ball.png'
import GreenPlusFigure from 'assets/images/figures/green_plus.png'
import YellowPlusFigure from 'assets/images/figures/yellow_plus.png'
import GreenRoundFigure from 'assets/images/figures/green_round.png'
import YellowRoundFigure from 'assets/images/figures/yellow_round.png'
import PyramidFigure from 'assets/images/figures/pyramid.png'
import LottiePlayer from 'components/Shared/LottiePlayer'
import animationData from './animation.json'

const FIGURES = [
  {
    name: 'ball',
    image: BallFigure,
  },
  {
    name: 'green-plus',
    image: GreenPlusFigure,
  },
  {
    name: 'yellow-plus',
    image: YellowPlusFigure,
  },
  {
    name: 'green-plus-2',
    image: GreenPlusFigure,
  },
  {
    name: 'yellow-plus-2',
    image: YellowPlusFigure,
  },
  {
    name: 'green-round',
    image: GreenRoundFigure,
  },
  {
    name: 'yellow-round',
    image: YellowRoundFigure,
  },
  {
    name: 'pyramid',
    image: PyramidFigure,
  },
]

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__title">
        We make your ideas
        <span className="banner__title text-secondary"> true</span>
      </div>
      <LottiePlayer animationData={animationData} className="banner__animation" />
      {FIGURES.map((figure) => (
        <div className={`banner__figure banner__figure--${figure.name}`}>
          <img src={figure.image} alt="" />
        </div>
      ))}
    </div>
  )
}
