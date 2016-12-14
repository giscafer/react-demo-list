'use strict';

import React from 'react';

class NavComponent extends React.Component {
  render() {
    return (
      <div className="nav">
       <a href="#/">Home</a>
      </div>
    );
  }
}

NavComponent.displayName = 'navComponent';

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
