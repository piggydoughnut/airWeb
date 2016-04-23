import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as filesActions from "../actions/files.actions";

var Gallery = require("../components/gallery");

class myGalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: null,
        };
        this.props.getGalleryForUser(this.props.user._id, 1);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gallery.hasOwnProperty('user')) {
            this.setState({
                elements: nextProps.gallery.user
            });
        }
    }

    render() {
        if (!this.state.elements) {
            return (<h3>Loading...</h3>);
        }
        return (
            <Gallery
                elements={this.state.elements}
            />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        gallery: store.gallery,
        user: store.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGalleryForUser: bindActionCreators(filesActions.getGalleryForUser, dispatch),
    };
};

myGalleryContainer = connect(mapStateToProps, mapDispatchToProps)(myGalleryContainer);

module.exports = myGalleryContainer;
