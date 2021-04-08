import React from 'react'

import ImagePlan from 'assets/images/services/plan.png'
import ImageDesgin from 'assets/images/services/design.png'
import ImageCode from 'assets/images/services/code.png'
import Pill from './Pill'
import PlanAnimations from './PlanAnimations'
import DesignAnimations from './DesignAnimations'
import CodeAnimations from './CodeAnimations'

export default function Services() {
  return (
    <div id="services" className="services">
      <div className="section-title">
        <h3 className="section-title__number">01</h3>
        <h4 className="section-title__title">Our Services</h4>
      </div>
      <div className="services__list">
        <Pill
          animations={<PlanAnimations />}
          icon={ImagePlan}
          text="We create fully customized solutions, so communication and adaptation to changes is one of our factors to highlight."
          title="Plan"
        />
        <Pill
          animations={<DesignAnimations />}
          icon={ImageDesgin}
          text="We design applications based on the identity of the organization and the idea that wants to convey, with total emphasis on the User Experience."
          title="Design"
          className="pill__img--design"
        />
        <Pill
          animations={<CodeAnimations />}
          icon={ImageCode}
          text="With the latest technologies and paying special attention to details, we deliver the best solution to our clients."
          title="Code"
        />
      </div>
    </div>
  )
}
