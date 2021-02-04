import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Services from './Services'
import Team from './Team/Team'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Banner />
        <Services />
        <Team />
        <Portfolio />
        <Contact />
      </div>
    </div>
  )
}

export default App
