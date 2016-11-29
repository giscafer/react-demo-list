
import React from 'react';
import { Link } from 'react-router';

export default class Links extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Link {...this.props } activeClassName="active"/>
    }
}