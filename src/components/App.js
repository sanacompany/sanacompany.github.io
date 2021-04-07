import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import PropTypes from 'prop-types'

import * as ROUTES from 'constants/Urls'
import Header from 'components/Header'
import Footer from 'components/Footer'
import FooterInternal from 'components/Footer/FooterInternal'
import Home from 'components/Home'
import ProjectDetail from 'components/Project/ProjectDetailContainer'
import ScrollToTop from 'components/Shared/ScrollToTop'

const Section = ({ children, internal }) => {
  if (internal) {
    return (
      <>
        <div className="main">
          {children}
        </div>
        <FooterInternal />
      </>
    )
  }

  return (
    <>
      <div className="main">
        {children}
      </div>
      <Footer />
    </>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  internal: PropTypes.bool,
}

Section.defaultProps = { internal: false }

// Main
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path={ROUTES.PROJECT}>
            <Section internal>
              <ProjectDetail />
            </Section>
          </Route>
          <Route path={ROUTES.HOME}>
            <Section>
              <Home />
            </Section>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
