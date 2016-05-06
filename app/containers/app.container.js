import React from "react";
import {Col, Nav, Navbar, NavItem} from "react-bootstrap";
import {Provider} from "react-redux";
var NavLink = require('../components/navLink');
var Home = require('./home.container');

class AppContainer extends React.Component {
    render() {
        console.log('hello');
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Messaging App Web</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><NavLink to="/messages">Messages</NavLink></li>
                        <li><NavLink to="/gallery">3D Gallery</NavLink></li>
                        <li><NavLink to="/my-gallery">My Gallery</NavLink></li>
                        <li><NavLink to="/upload">Upload 3D</NavLink></li>
                        <li><NavLink to="/stats">Stats</NavLink></li>
                    </Nav>
                </Navbar>
                <Col md={1}></Col>
                <Col md={8}>
                    {this.props.children || <Home/>}
                </Col>
            </div>
        )
    }
}

module.exports = AppContainer;