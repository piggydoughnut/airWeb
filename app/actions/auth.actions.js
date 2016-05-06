/** Actions */
export const LOGIN_BASIC = 'LOGIN_BASIC';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_TOKEN = 'SET TOKEN';
export const SET_USER_FROM_LS = 'SET USER FROM LOCAL STORAGE';

/** Action creators */

export function basicLogin(user) {
    return {
        type: LOGIN_BASIC,
        payload: {user}
    }
}
export function setToken(data) {
    return {
        type: SET_TOKEN,
        payload: data
    }
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

