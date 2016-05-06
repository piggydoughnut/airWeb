import {LOGIN_SUCCESS, LOGIN_FAILURE, SET_TOKEN, SET_USER_FROM_LS} from "../actions/auth.actions.js";
// initial state for login is empty user details
const user = (state = [], action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                tokenInfo: action.payload
            };
        case LOGIN_FAILURE:
            return {
                error: action.payload.error
            };
        case LOGIN_SUCCESS:
            var userInfo = {
                tokenInfo: state.tokenInfo,
                user: action.payload
            };
            localStorage.setItem('user', JSON.stringify(userInfo));
            return userInfo;
        case SET_USER_FROM_LS:
            var user = JSON.parse(localStorage.getItem('user'));
            return{
                tokenInfo: user.tokenInfo,
                user: user.user
            }
        default:
            return state;
    }
};

export default user;
