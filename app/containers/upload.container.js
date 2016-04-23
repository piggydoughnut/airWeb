import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as filesActions from "../actions/files.actions";
var Upload = require('../components/upload');

class UploadContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gallery.hasOwnProperty('msg')) {
            this.setState({msg: nextProps.gallery.msg});
        }
    }

    _uploadFile(objFilename, files) {
        this.props.uploadFiles(objFilename, files, this.props.user._id);
    }

    render() {
        return (
            <Upload
                uploadFile={ (name, files) => this._uploadFile(name, files)}
                msg={this.state.msg}
            />
        )
    }
}
const mapStateToProps = (store) => {
    return {
        user: store.user,
        gallery: store.gallery
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFiles: bindActionCreators(filesActions.uploadFiles, dispatch)
    };
};

UploadContainer = connect(mapStateToProps, mapDispatchToProps)(UploadContainer);

module.exports = UploadContainer;
