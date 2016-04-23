import {Col, Thumbnail, Button} from "react-bootstrap";
import React from "react";
var config = require('../config/config');

var styles = {
    msg200: {
        color: 'green'
    },
    msg400: {
        color: 'red'
    }
};

class Thumb extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            disabled: false,
            msg: null
        };
        this._addToGallery = this._addToGallery.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.hasOwnProperty('msg') && nextProps.msg != '') {
            this.setState({msg: nextProps.msg});
            this.setState({loading: false});
            this.setState({disabled: true});
        }
    }

    _addToGallery() {
        this.setState({loading: true});
        this.props.addToGalleryFn(this.props.element);
    }

    render() {
        return (
            <Col xs={6} md={3}>
                <Thumbnail src={config.server + this.props.element.thumb_file_path} alt="242x200">
                    <h4>{this.props.element.filename}</h4>
                    <div style={styles.msg200}>{this.state.msg}</div>
                    <p>
                        <Button
                            bsStyle="default"
                            disabled={this.state.disabled}
                            onClick={!this.state.loading ? () => this._addToGallery() : null}
                        >
                            {this.state.loading ? 'Processing...' : 'Add to my Gallery'}
                        </Button>
                    </p>
                </Thumbnail>
            </Col>
        )
    }
}

module.exports = Thumb;