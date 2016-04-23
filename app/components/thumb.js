import {Col, Thumbnail, Button} from "react-bootstrap";
import React from "react";
var config = require('../config/config');

class Thumb extends React.Component {

    _addToGallery(){
         this.props.addToGalleryFn(this.props.element);
    }
    render() {
        return (
            <Col xs={6} md={3}>
                <Thumbnail src={config.server + this.props.element.thumb_file_path} alt="242x200">
                    <h4>{this.props.element.filename}</h4>
                    <p>
                        <Button bsStyle="default" onClick={() => this._addToGallery()}>Add to my Gallery</Button>
                    </p>
                </Thumbnail>
            </Col>
        )
    }
}

module.exports = Thumb;