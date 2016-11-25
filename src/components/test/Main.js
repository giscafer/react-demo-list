'use strict';

import React from 'react';
import Resize from './ResizeComponent'
require('styles/test/Main.css');

class MainComponent extends React.Component {
  render() {
    return (
      <Resize/>
    );
  }
}

MainComponent.displayName = 'TestMainComponent';

// Uncomment properties you need
// MainComponent.propTypes = {};
// MainComponent.defaultProps = {};

export default MainComponent;
