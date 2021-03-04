import React from 'react'

import ImagePlan from 'assets/images/services/plan.png'
import ImageDesgin from 'assets/images/services/design.png'
import ImageCode from 'assets/images/services/code.png'
import Pill from './Pill'

export default function Services() {
  return (
    <div id="services" className="services">
      <div className="section-title">
        <h3 className="section-title__number">01</h3>
        <h4 className="section-title__title">Our Services</h4>
      </div>
      <div className="services__list">
        <Pill
          icon={ImagePlan}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque massa nec posuere tincidunt. Morbi vitae massa pharetra, dapibus turpis a, aliquet nisl."
          title="Plan"
        />
        <Pill
          icon={ImageDesgin}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque massa nec posuere tincidunt. Morbi vitae massa pharetra, dapibus turpis a, aliquet nisl."
          title="Design"
        />
        <Pill
          icon={ImageCode}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque massa nec posuere tincidunt. Morbi vitae massa pharetra, dapibus turpis a, aliquet nisl."
          title="Code"
        />
      </div>
    </div>
  )
}
