import React from 'react'

import ImageSanti from 'assets/images/members/santi.png'
import ImageColo from 'assets/images/members/colo.png'
import ImageFran from 'assets/images/members/fran.png'
import ImageMaria from 'assets/images/members/maria.png'

import ImageSantiHover from 'assets/images/members/santi-hover.png'
import ImageColoHover from 'assets/images/members/colo-hover.png'
import ImageFranHover from 'assets/images/members/fran-hover.png'
import ImageMariaHover from 'assets/images/members/maria-hover.png'

import Member from './Member'

export default function OurTeam() {
  return (
    <div id="team" className="our-team">
      <div className="section-title">
        <h3 className="section-title__number">02</h3>
        <h4 className="section-title__title">Our Team</h4>
      </div>
      <div className="our-team__list">
        <Member name="Santiago" picture={ImageSanti} hover={ImageSantiHover} position="ceo" />
        <Member name="Esteban" picture={ImageColo} hover={ImageColoHover} position="cto" />
        <Member name="Francisco" picture={ImageFran} hover={ImageFranHover} position="ld" />
        <Member name="María" picture={ImageMaria} hover={ImageMariaHover} position="cdo" />
      </div>
    </div>
  )
}
