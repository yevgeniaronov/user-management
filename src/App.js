import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '@components/Layout/Header'
import Users from '@views/Users'

import './api'

const App = () => (
  <div>
    <Router>
      <Header />
      <div className="pl-10 pr-10 mt-10">
        <Route path="/" component={Users} />
      </div>
      {/* <Route path="/about" render={() => <h1>About</h1>} /> */}
      {/* <Route path="/about" children={({ match }) => match && <h1>About</h1>} /> */}
    </Router>
  </div>
)

export default App
