import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as filesActions from "../actions/files.actions";

var Gallery = require("../components/gallery");

class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: null
        }
        this.props.getGallery(1);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps.gallery.hasOwnProperty('docs')){
            this.setState({
                elements: nextProps.gallery.docs
            });
        }
    }

    render() {
        if(!this.state.elements){
            return(<h3>Loading...</h3>);
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
        gallery: store.gallery
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGallery: bindActionCreators(filesActions.getGallery, dispatch)
    };
};

GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);

module.exports = GalleryContainer;