import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as filesActions from "../actions/files.actions";
var Upload = require('../components/upload');

class UploadContainer extends React.Component {

    _uploadFile(objFilename, files) {
        console.log('upload container');
        console.log(objFilename);
        this.props.uploadFiles(objFilename, files, this.props.user._id)
    }

    render() {
        return (
           <Upload
               uploadFile={ (name, files) => this._uploadFile(name, files)}
           />
        )
    }
}
const mapStateToProps = (store) => {
    return {
        user: store.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFiles: bindActionCreators(filesActions.uploadFiles, dispatch)
    };
};

UploadContainer = connect(mapStateToProps, mapDispatchToProps)(UploadContainer);

module.exports = UploadContainer;
