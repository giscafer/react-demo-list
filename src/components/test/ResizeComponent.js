'use strict';

import React from 'react';


require('styles/test/Test.css');

class ResizeComponent extends React.Component {
  constructor(){
    super()
    this.state={
      windowWidth:window.innerWidth
    }
    this.handleResize=this.handleResize.bind(this);
  }
  handleResize(){
    this.setState({windowWidth:window.innerWidth})
  }
  componentDidMount(){
    window.addEventListener('resize',this.handleResize);
  }
  componentWillUnMount(){
    window.removeEventListener('resize',this.handleResize);
  }
  render() {
    return (
      <div className="test-component">
        Current Window Width:{this.state.windowWidth}
      </div>
    );
  }
}

ResizeComponent.displayName = 'TestResizeComponent';

// Uncomment properties you need
// ResizeComponent.propTypes = {};
// ResizeComponent.defaultProps = {};

export default ResizeComponent;
