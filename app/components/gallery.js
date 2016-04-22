var React = require("react");
var Masonry = require('react-masonry-component');
var Thumb = require('./thumb');

var masonryOptions = {
    transitionDuration: 0
};

var Gallery = React.createClass({
    render: function () {
        var childElements = this.props.elements.map(function(element){
            return (
                <Thumb key={element._id} element={element} />
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