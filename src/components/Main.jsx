import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Guides from './Guides'

const Main = (props) => (
  <main style={{padding: "3em 10%", margin:"7vh auto"}}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/guides' component={Guides}/>
    </Switch>
  </main>
)

export default Main