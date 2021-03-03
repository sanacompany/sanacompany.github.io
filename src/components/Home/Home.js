import React from 'react'

import Banner from 'components/Banner'
import Services from 'components/Services'
import OurTeam from 'components/OurTeam'
import Portfolio from 'components/Portfolio'
import Contact from 'components/Contact'

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <OurTeam />
      <Portfolio />
      <Contact />
    </>
  )
}
