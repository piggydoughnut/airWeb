/** Actions */
export const MESSAGES_USER_LOAD = 'MESSAGES LOAD';
export const MESSAGES_LOAD_SUCCESS = 'MESSAGES LOAD SUCCESS';
export const MESSAGES_LOAD_FAILURE = 'MESSAGES LOAD FAILURE';


/** Action creators */
export function loadMessagesForUser(id) {
    return {
        type: MESSAGES_USER_LOAD,
        payload: {
            user_id: id
        }
    }
}
export function success(data, action){
    return {
        type: action,
        payload: {
            messages: data
        }
    };
}

export function failure(error, action){
    return {
        type: action,
        payload: {
            error: error
        }
    };
}