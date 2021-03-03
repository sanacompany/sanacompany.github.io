import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import * as ROUTES from 'constants/Urls'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'components/Home'
import ProjectDetail from 'components/Project/ProjectDetailContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Router basename="/">
          <Switch>
            <Route path={ROUTES.PROJECT}>
              <ProjectDetail />
            </Route>
            <Route path={ROUTES.HOME}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
