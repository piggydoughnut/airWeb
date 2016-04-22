import {takeEvery, takeLatest} from "redux-saga";
import {take, put, call, fork, select} from "redux-saga/effects";
import {MESSAGES_USER_LOAD, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE} from "../actions/messages.actions";
import {FILES_POST, FILES_POST_SUCCESS, FILES_POST_FAILURE} from '../actions/files.actions';
import {GET_GALLERY, GET_GALLERY_SUCCESS, GET_GALLERY_FAILURE} from '../actions/files.actions';

var messagesApi = require('../api/messages.api');
var filesApi = require('../api/files.api');
var commonActions = require('../actions/common.actions');

function* loadMessages(data) {
    try {
        const response = yield call(messagesApi.loadMessagesForUser, data.payload.user_id);
        yield put(commonActions.success(MESSAGES_LOAD_SUCCESS));
    } catch (error) {
        yield put(commonActions.failure(error, MESSAGES_LOAD_FAILURE));
    }
}

function* postFiles(data) {
    try {
        const response = yield call(filesApi.postObjFileForm, data.payload);
        yield put(commonActions.success(FILES_POST_SUCCESS));
    } catch (error) {
        yield put(commonActions.failure(error, FILES_POST_FAILURE));
    }
}

function* getGallery(data) {
    try {
        const response = yield call(filesApi.getGallery, data.page);
        yield put(commonActions.success(GET_GALLERY_SUCCESS, response));
    } catch (error) {
        yield put(commonActions.failure(error, GET_GALLERY_FAILURE));
    }
}
/** watchers */

export function* watchMessagesLoad() {
    yield* takeEvery(MESSAGES_USER_LOAD, loadMessages);
}

export function* watchFileFormPost() {
    yield* takeEvery(FILES_POST, postFiles);
}

export function* watchGetGallery() {
    yield* takeEvery(GET_GALLERY, getGallery);
}

