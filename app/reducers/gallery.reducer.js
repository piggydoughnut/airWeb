import {GET_GALLERY_SUCCESS, ADD_TO_GALLERY_SUCCESS, GET_GALLERY_USER_SUCCESS, FILES_POST_SUCCESS} from "../actions/files.actions";

// initial state for messages is an empty array
const gallery = (state = [], action) => {
    switch (action.type) {
        case GET_GALLERY_SUCCESS:
            return action.payload;
        case GET_GALLERY_USER_SUCCESS:
            return {
                user: action.payload
            };
        case ADD_TO_GALLERY_SUCCESS:
            return {
                msg: action.payload,
                docs: state.docs,
                limit: state.limit,
                total: state.total
        };
        case FILES_POST_SUCCESS:
            return {
                msg: action.payload.msg
        };
        default:
            return state;
    }
};

export default gallery;
