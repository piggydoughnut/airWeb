import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as messageActions from "../actions/messages.actions";
import * as authActions from "../actions/auth.actions";
import {Table, Tabs, Tab} from "react-bootstrap";
import { push } from 'react-router-redux'

var Row = require('../components/row');

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
        this._loadMessages();
        this.state = {
            messages: null
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps.user === undefined){
            console.log('user is empty');
            this.props.goToLogin();

        }
        if(nextProps.messages.hasOwnProperty('docs')){
            this.setState({messages: nextProps.messages.docs});
        }
    }

    _loadMessages() {
        this.props.loadMessagesForUser(this.props.user._id, this.props.token.access_token);
    }

    render() {
        if(!this.state.messages){
            return (<h3>Loading...</h3>);
        }
        var messages = this.state.messages.map(function(message){
            return (
                <Row key={message._id} message={message} />
            );
        });

        return (
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="My messages">
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Message</th>
                        <th>Image</th>
                        <th>3D</th>
                        <th>Comments</th>
                        <th>Views</th>
                        <th>Created</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages}
                    </tbody>
                </Table>


            </Tab>
            <Tab eventKey={2} title="Messages I follow">

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Message</th>
                        <th>Image</th>
                        <th>3D object</th>
                        <th>Comments</th>
                        <th>Views</th>
                        <th>Created</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    </tbody>
                </Table>


            </Tab>
        </Tabs>

         )
    }
}

const mapStateToProps = (store) => {
    return {
        messages: store.messages,
        user: store.user.user,
        token: store.user.tokenInfo,
        store: store
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMessagesForUser: bindActionCreators(messageActions.loadMessagesForUser, dispatch),
        goToLogin: bindActionCreators(authActions.redirectToLogin, dispatch)
    };
};

MessageContainer = connect(mapStateToProps, mapDispatchToProps)(MessageContainer);

module.exports = MessageContainer;