import {MESSAGES_LOAD_SUCCESS} from "../actions/messages.actions";
// initial state for messages is an empty array
const messages = (state = [], action) => {
    switch (action.type) {
        case MESSAGES_LOAD_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default messages;
