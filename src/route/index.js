import React from 'react';
import NavLink from './NavLink';
export default class RouteApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>React Demo List</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/github-user">Github User</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                    <li><NavLink to="/lifecycle">LifeCycle</NavLink></li>
                    <li><NavLink to="/todo">TODO</NavLink></li>
                </ul>
            </div>
        );
    }
}