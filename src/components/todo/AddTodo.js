'use strict'

import React, {Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
export default class AddTodo extends Component{
    render(){
        return(
            <div>
                <input type='text' ref='input'/>
                <button onClick={e=>this.handleClick(e)}> 添加 </button>
            </div>
        );
    }
    handleClick(){
        const node = ReactDOM.findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}
 AddTodo.propTypes = {
     onAddClick:PropTypes.func.isRequired
 };