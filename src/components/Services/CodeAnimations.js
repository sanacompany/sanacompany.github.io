import React from 'react'

import BallFigure from 'assets/images/figures/ball_without_shadow.png'
import GreenPlusFigure from 'assets/images/figures/green_plus.png'
import YellowPlusFigure from 'assets/images/figures/yellow_plus.png'
import GreenRoundFigure from 'assets/images/figures/green_round.png'
import YellowRoundFigure from 'assets/images/figures/yellow_round.png'
import PyramidFigure from 'assets/images/figures/pyramid_without_shadow.png'

const FIGURES = [
  {
    name: 'pyramid',
    image: PyramidFigure
  },
  {
    name: 'yellow-round',
    image: YellowRoundFigure
  },
  {
    name: 'green-plus',
    image: GreenPlusFigure
  },
  {
    name: 'ball',
    image: BallFigure
  },
  {
    name: 'yellow-plus',
    image: YellowPlusFigure
  },
  {
    name: 'ball-2',
    image: BallFigure
  },
  {
    name: 'green-round',
    image: GreenRoundFigure
  },
  {
    name: 'yellow-plus-2',
    image: YellowPlusFigure
  },
  {
    name: 'pyramid-2',
    image: PyramidFigure
  },
  {
    name: 'yellow-round-2',
    image: YellowRoundFigure
  },
  {
    name: 'green-plus-2',
    image: GreenPlusFigure
  },
  {
    name: 'ball-3',
    image: BallFigure
  },
  {
    name: 'yellow-plus-3',
    image: YellowPlusFigure
  },
  {
    name: 'ball-4',
    image: BallFigure
  },
  {
    name: 'green-round-2',
    image: GreenRoundFigure
  },
  {
    name: 'yellow-plus-4',
    image: YellowPlusFigure
  }
]

export default function PlanAnimations() {
  return (
    <>
      {FIGURES.map((figure, index) => {
        const even = index % 2 === 0

        return (
          <div
            key={`pill-code-3d-figure-${figure.name}`}
            className={`pill-code__figure ${even ? 'pill-code__figure--invested' : ''} pill-code__figure--${figure.name}`}
          >
            <img src={figure.image} alt="3d animated figure" />
          </div>
        )
      })}
    </>
  )
}
