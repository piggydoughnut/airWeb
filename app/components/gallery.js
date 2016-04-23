var React = require("react");
var Masonry = require('react-masonry-component');
var Thumb = require('./thumb');

var masonryOptions = {
    transitionDuration: 2
};

class Gallery extends React.Component {

    constructor(props){
        super(props);
        this.addToG = this.addToG.bind(this);

    }

    addToG(data) {
        this.props.addToGallery(data)
    }
    render() {
        var childElements = this.props.elements.map(function (element) {
            var msg = '';
            if(this.props.msg && (element.thumb_file_path == this.props.msg.thumb_file_path)){
                msg = this.props.msg.msg;
            }
            return (
                <Thumb
                    key={element._id}
                    element={element}
                    addToGalleryFn={this.addToG}
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