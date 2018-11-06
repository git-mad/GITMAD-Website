import React from 'react';
import { Switch, Route } from 'react-router-dom'
import GuidePage from './GuidePage'
import GuideList from './GuideList'

const Guides = (props) => {
	return (
	  <Switch>
	    <Route exact path='/guides' component={GuideList}/>
	    <Route path='/guides/:guide' component={GuidePage}/>
	  </Switch>
	);
}

export default Guides;