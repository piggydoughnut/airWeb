var React = require("react");
var Masonry = require('react-masonry-component');
var Thumb = require('./thumb');

var masonryOptions = {
    transitionDuration: 2
};

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.addToG = this.addToG.bind(this);

    }

    addToG(data) {
        this.props.addToGallery(data)
    }

    render() {
        if(this.props.elements.total == 0){
            return (<h3>This gallery is empty</h3>);
        }
        var childElements = this.props.elements.docs.map(function (element) {
            var msg = '';
            var addToGallery = null;
            if (this.props.hasOwnProperty('addToGallery')) {
                addToGallery = this.addToG;
            }
            if (this.props.msg && (element.thumb_file_path == this.props.msg.thumb_file_path)) {
                msg = this.props.msg.msg;
            }
            return (
                <Thumb
                    key={element._id}
                    element={element}
                    addToGalleryFn={addToGallery}
                    msg={msg}
                />
            );
        }, this);

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
}

module.exports = Gallery;