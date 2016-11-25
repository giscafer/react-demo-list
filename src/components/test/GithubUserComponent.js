'use strict';

import React from 'react';

require('styles/test/GithubUser.css');

class GithubUserComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={
      "name": "Nickbing Lao",
      "company": null,
      "blog": "http://giscafer.com",
      "location": "GuangZhou China",
      "email": "giscafer@outlook.com"
    }
  }
  componentDidMount(){
    this.serverRequest=$.get(this.props.source,(res)=>{
      let info=res[0];
      this.setState(info);
    })
  }
  componentWillUnMount(){
    this.serverRequest.abort();
  }
  render() {
    return (
      <div className="githubuser-component">
          <p>name:{this.name}</p>
          <p>company:{this.company}</p>
          <p>blog:{this.blog}</p>
          <p>location:{this.location}</p>
          <p>email:{this.email}</p>
      </div>
    );
  }
}

GithubUserComponent.displayName = 'TestGithubUserComponent';

// Uncomment properties you need
// GithubUserComponent.propTypes = {};
// GithubUserComponent.defaultProps = {};

export default GithubUserComponent;
