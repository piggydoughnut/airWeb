import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as filesActions from "../actions/files.actions";

var Gallery = require("../components/gallery");

class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: null,
            msg: null
        };
        this.props.getGallery(1);
    }

    _addToGallery(data) {
        var postData = {
            'obj_file_path': data.obj_file_path,
            'thumb_file_path': data.thumb_file_path,
            'user_id':  this.props.user._id,
            'filename':  data.filename
        };
        this.props.addToGallery(postData);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.gallery.hasOwnProperty('docs')){
            this.setState({
                elements: nextProps.gallery
            });
        }
        if(nextProps.gallery.hasOwnProperty('msg')) {
            this.setState({
                msg: nextProps.gallery.msg
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
                addToGallery={(data) => this._addToGallery(data)}
                msg={this.state.msg}
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
        getGallery: bindActionCreators(filesActions.getGallery, dispatch),
        addToGallery: bindActionCreators(filesActions.addToGallery, dispatch)
    };
};

GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);

module.exports = GalleryContainer;