/**
 * 将根组件包装进 <Provider>
 */
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import todoApp from '../../reducers/todo/reducers.js';

let store=createStore(todoApp);

export default class TodoIndex extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}