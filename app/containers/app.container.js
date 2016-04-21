import React from 'react'
var NavLink = require('../components/navLink');
var Home = require('./home.container');

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Messaging App Web Test</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/stats">Stats</NavLink></li>
                </ul>
                {this.props.children || <Home/>}
            </div>
        )
    }
})
