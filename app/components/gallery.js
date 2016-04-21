var React = require("react");
var Masonry = require('react-masonry-component');
import {Col, Thumbnail, Button} from "react-bootstrap";

var masonryOptions = {
    transitionDuration: 0
};

var Gallery = React.createClass({
    render: function () {
        var childElements = this.props.elements.map(function(element){
            return (
            <Col xs={6} md={3} key={element.key}>
                <Thumbnail src={element.src}  alt="242x200" >
                    <h4>{element.name}</h4>
                    <p>
                        <Button bsStyle="default">Add to my Gallery</Button>
                    </p>
                </Thumbnail>
            </Col>
            );
        });

        return (
            <Masonry
                className={'my-gallery'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
                {childElements}
            </Masonry>
        );
    }
});

module.exports = Gallery;