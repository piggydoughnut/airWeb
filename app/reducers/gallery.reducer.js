import {GET_GALLERY_SUCCESS} from "../actions/files.actions";

// initial state for messages is an empty array
const gallery = (state = [], action) => {
    switch (action.type) {
        case GET_GALLERY_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default gallery;
