import React from 'react'

import BallFigure from 'assets/images/figures/ball_without_shadow.png'
import GreenPlusFigure from 'assets/images/figures/green_plus.png'
import YellowPlusFigure from 'assets/images/figures/yellow_plus.png'
import GreenRoundFigure from 'assets/images/figures/green_round.png'
import YellowRoundFigure from 'assets/images/figures/yellow_round.png'
import PyramidFigure from 'assets/images/figures/pyramid_without_shadow.png'

const FIGURES = [
  {
    name: 'ball',
    image: BallFigure
  },
  {
    name: 'yellow-plus-2',
    image: YellowPlusFigure
  },
  {
    name: 'green-round',
    image: GreenRoundFigure
  },
  {
    name: 'yellow-round',
    image: YellowRoundFigure
  },
  {
    name: 'green-plus-2',
    image: GreenPlusFigure
  },
  {
    name: 'pyramid',
    image: PyramidFigure
  },
  {
    name: 'yellow-plus',
    image: YellowPlusFigure
  },
  {
    name: 'green-plus',
    image: GreenPlusFigure
  }
]

export default function PlanAnimations() {
  return (
    <>
      {FIGURES.map((figure, index) => {
        const even = index % 2 === 0

        return (
          <div
            key={`pill-plan-3d-figure-${figure.name}`}
            className={`pill-plan__figure ${even ? 'pill-plan__figure--invested' : ''} pill-plan__figure--${figure.name}`}
          >
            <img src={figure.image} alt="3d animated figure" />
          </div>
        )
      })}
    </>
  )
}
