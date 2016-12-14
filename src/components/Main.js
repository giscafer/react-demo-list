require('normalize.css/normalize.css');
require('styles/App.css');
require('../common/utils.js')
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import GithubUserApp from './test/Main.js';
import ProductApp from './product/Main.js';
import LifeCycleApp from './lifecycle/Main.js';
import RouteApp from '../route/index.js';

class AppComponent extends React.Component {
  render() {
    return (
     <Router history={hashHistory}>
        <Route path="/" component={RouteApp}/>
        <Route path="/github-user" component={GithubUserApp}/>
        <Route path="/product" component={ProductApp}/>
        <Route path="/lifecycle" component={LifeCycleApp}/>
     </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
