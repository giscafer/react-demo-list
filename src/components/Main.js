require('normalize.css/normalize.css');
require('styles/App.css');
require('../common/utils.js')
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import RouteApp from '../route/index.js';
import GithubUserApp from './test/Main.js';
import ProductApp from './product/Main.js';
import LifeCycleApp from './lifecycle/Main.js';
import TodoApp from './todo/index.js';
import CityPanelApp from './citypanel/Main';

class AppComponent extends React.Component {
  enterHandle(nextState) {
    if (oConsole) {
      if (nextState.location.pathname.includes('lifecycle')) {
        clearConsole()
        oConsole.style.display = 'block';
      } else {
        oConsole.style.display = 'none';
      }
    }
  }
  enterHandle2(nextState) {
    console.log()
  }
  render() {

    return (
      <Router history={hashHistory}>
        <Route path="/" component={RouteApp} onEnter={(nextState) => this.enterHandle(nextState)} />
        <Route path="/github-user" component={GithubUserApp} onEnter={(nextState) => this.enterHandle(nextState)} />
        <Route path="/product" component={ProductApp} onEnter={(nextState) => this.enterHandle(nextState)} />
        <Route path="/lifecycle" component={LifeCycleApp} onEnter={(nextState) => this.enterHandle(nextState)} />
        <Route path="/todo" component={TodoApp} onEnter={(nextState) => this.enterHandle(nextState)} />
        <Route path="/citypanel" component={CityPanelApp} onEnter={(nextState) => this.enterHandle(nextState)} />
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
