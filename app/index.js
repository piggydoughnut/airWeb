import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";
import App from "./containers/app.container";
var Profile = require("./containers/profile.container");
var Messages = require("./containers/messages.container");
var Stats = require("./containers/stats.container");
var Home = require("./containers/home.container");
var Gallery = require("./containers/gallery.container");

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
            <Route path="/stats" component={Stats}/>
            <Route path="/gallery" component={Gallery}/>
        </Route>
    </Router>
), document.getElementById('app'));
