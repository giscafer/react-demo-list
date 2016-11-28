'use strict';

import React from 'react';
import Resize from './ResizeComponent';
import GithubUser from './GithubUserComponent';
require('styles/test/Main.css');

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <Resize/>
       <GithubUser source="https://api.github.com/users/giscafer"/>
      </div>
    );
  }
}

MainComponent.displayName = 'TestMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
