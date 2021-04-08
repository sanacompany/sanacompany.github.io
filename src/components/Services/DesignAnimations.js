import React from 'react'

import BallFigure from 'assets/images/figures/ball_without_shadow.png'
import GreenPlusFigure from 'assets/images/figures/green_plus.png'
import YellowPlusFigure from 'assets/images/figures/yellow_plus.png'
import GreenRoundFigure from 'assets/images/figures/green_round.png'
import YellowRoundFigure from 'assets/images/figures/yellow_round.png'
import PyramidFigure from 'assets/images/figures/pyramid_without_shadow.png'

const FIGURES = [
  {
    name: 'green-plus',
    image: GreenPlusFigure
  },
  {
    name: 'pyramid',
    image: PyramidFigure
  },
  {
    name: 'ball',
    image: BallFigure
  },
  {
    name: 'ball-2',
    image: BallFigure
  },
  {
    name: 'yellow-round',
    image: YellowRoundFigure
  },
  {
    name: 'yellow-plus-2',
    image: YellowPlusFigure
  },
  {
    name: 'yellow-plus',
    image: YellowPlusFigure
  },
  {
    name: 'green-round',
    image: GreenRoundFigure
  },
]

export default function DesignAnimations() {
  return (
    <>
      {FIGURES.map((figure, index) => {
        const even = index % 2 === 0

        return (
          <div
            key={`pill-design-3d-figure-${figure.name}`}
            className={`pill-design__figure ${even ? 'pill-design__figure--invested' : ''} pill-design__figure--${figure.name}`}
          >
            <img src={figure.image} alt="3d animated figure" />
          </div>
        )
      })}
    </>
  )
}
