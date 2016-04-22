import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";
var Profile = require("./containers/profile.container");
var Messages = require("./containers/messages.container");
var Stats = require("./containers/stats.container");
var Home = require("./containers/home.container");
var Gallery = require("./containers/gallery.container");
var Upload = require("./containers/upload.container");
var App = require("./containers/app.container");

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/messages" component={Messages}/>
                <Route path="/stats" component={Stats}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/upload" component={Upload}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
