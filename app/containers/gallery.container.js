import React from "react";
var Gallery = require("../components/gallery");

var elements = [
    {
        key: 1,
        src: 'http://127.0.0.1/airmsgs/airServer/public/gallery/thumbs/dragon.png',
        name: 'Dragon'
    },
    {
        key: 2,
        src: 'http://127.0.0.1/airmsgs/airServer/public/gallery/thumbs/talia.png',
        name: 'Talia'
    },
    {
        key: 3,
        src: 'http://127.0.0.1/airmsgs/airServer/public/gallery/thumbs/dragon.png',
        name: 'Dragon'
    },
    {
        key: 4,
        src: 'http://127.0.0.1/airmsgs/airServer/public/gallery/thumbs/talia.png',
        name: 'Talia'
    },
    {
        key: 5,
        src: 'http://127.0.0.1/airmsgs/airServer/public/gallery/thumbs/dragon.png',
        name: 'Dragon'
    },
    {
        key: 6,
        src: 'http://127.0.0.1/airmsgs/airServer/public/gallery/thumbs/talia.png',
        name: 'Talia'
    },
    {
        key: 7,
        src: 'http://127.0.0.1/airmsgs/airServer/public/gallery/thumbs/dragon.png',
        name: 'Dragon'
    },
    {
        key: 8,
        src: 'http://127.0.0.1/airmsgs/airServer/public/gallery/thumbs/talia.png',
        name: 'Talia'
    }
];

class GalleryContainer extends React.Component {
    render() {
        return (
            <Gallery
                elements={elements}
            />
        );
    }
}

module.exports = GalleryContainer;