import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import OrganizationChart from '../pages/OrganizationChart'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/organization-chart/:monthId" component={OrganizationChart} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
