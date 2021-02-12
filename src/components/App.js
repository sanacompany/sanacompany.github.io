import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Services from './Services'
import OurTeam from './OurTeam'
import Portfolio from './Portfolio'
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Banner />
        <Services />
        <OurTeam />
        <Portfolio />
        <Contact />
      </div>
    </div>
  )
}

export default App
