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
var myGallery = require("./containers/mygallery.container");
var Upload = require("./containers/upload.container");
var App = require("./containers/app.container");
var Login = require("./containers/login.container");

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

function requireAuth(nextState, replace) {
    var state = store.getState();
    console.log(state);
    if (state.user === undefined || state.user.user == undefined || state.user.tokenInfo === undefined || state.user.tokenInfo === []) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} onEnter={requireAuth}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}  onEnter={requireAuth}/>
                <Route path="/messages" component={Messages}  onEnter={requireAuth}/>
                <Route path="/stats" component={Stats}  onEnter={requireAuth}/>
                <Route path="/gallery" component={Gallery}  onEnter={requireAuth}/>
                <Route path="/my-gallery" component={myGallery}  onEnter={requireAuth}/>
                <Route path="/upload" component={Upload}  onEnter={requireAuth}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
