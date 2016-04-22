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