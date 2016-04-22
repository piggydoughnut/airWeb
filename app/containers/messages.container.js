import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as messageActions from "../actions/messages.actions";

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
        this._loadMessages();
        this.state = {
            messages: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    _loadMessages() {
        this.props.loadMessagesForUser(this.props.user._id);
    }

    render() {
        return (
            <div>Messages very hello</div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        messages: store.messages,
        user: store.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMessagesForUser: bindActionCreators(messageActions.loadMessagesForUser, dispatch)
    };
};

MessageContainer = connect(mapStateToProps, mapDispatchToProps)(MessageContainer);

module.exports = MessageContainer;