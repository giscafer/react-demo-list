'use strict';

import React from 'react';
import $ from 'jquery';


require('styles/test/GithubUser.css');

class GithubUserComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      company: '',
      blog: '',
      location: '',
      email: ''
    }
  }
  componentDidMount(){
    this.serverRequest=$.get(this.props.source,(res)=>{
      this.setState(res);
    })
  }
  componentWillUnMount(){
    this.serverRequest.abort();
  }
  render() {
    return (
      <div className="githubuser-component">
          <h3>githubuser-componen</h3>
          <p>name:{this.state.name}</p>
          <p>company:{this.state.company}</p>
          <p>blog:{this.state.blog}</p>
          <p>location:{this.state.location}</p>
          <p>email:{this.state.email}</p>
      </div>
    );
  }
}

GithubUserComponent.displayName = 'TestGithubUserComponent';

// Uncomment properties you need
// GithubUserComponent.propTypes = {};
// GithubUserComponent.defaultProps = {};

export default GithubUserComponent;
