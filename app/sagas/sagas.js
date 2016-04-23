import {takeEvery, takeLatest} from "redux-saga";
import {take, put, call, fork, select} from "redux-saga/effects";
import {MESSAGES_USER_LOAD, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE} from "../actions/messages.actions";
import {FILES_POST, FILES_POST_SUCCESS, FILES_POST_FAILURE} from '../actions/files.actions';
import {GET_GALLERY, GET_GALLERY_SUCCESS, GET_GALLERY_FAILURE} from '../actions/files.actions';
import {GET_GALLERY_USER, GET_GALLERY_USER_SUCCESS, GET_GALLERY_USER_FAILURE} from '../actions/files.actions';
import {ADD_TO_GALLERY, ADD_TO_GALLERY_SUCCESS, ADD_TO_GALLERY_FAILURE} from '../actions/files.actions';

var messagesApi = require('../api/messages.api');
var filesApi = require('../api/files.api');
var commonActions = require('../actions/common.actions');

function* loadMessages(data) {
    try {
        const response = yield call(messagesApi.loadMessagesForUser, data.payload.user_id);
        yield put(commonActions.success(MESSAGES_LOAD_SUCCESS, response));
    } catch (error) {
        yield put(commonActions.failure(error, MESSAGES_LOAD_FAILURE));
    }
}

function* postFiles(data) {
    try {
        const response = yield call(filesApi.postObjFileForm, data.payload);
        yield put(commonActions.success(FILES_POST_SUCCESS, response));
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

function* getGalleryUser(data) {
    try {
        const response = yield call(filesApi.getGalleryForUser, data.payload);
        yield put(commonActions.success(GET_GALLERY_USER_SUCCESS, response));
    } catch (error) {
        yield put(commonActions.failure(error, GET_GALLERY_USER_FAILURE));
    }
}

function* addToGallery(data) {
    try {
        const response = yield call(filesApi.addToGallery, data.payload);
        yield put(commonActions.success(ADD_TO_GALLERY_SUCCESS, response));
    } catch (error) {
        yield put(commonActions.failure(error, ADD_TO_GALLERY_FAILURE));
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
export function* watchGetGalleryUser() {
    yield* takeEvery(GET_GALLERY_USER, getGalleryUser);
}

export function* watchAddToGallery() {
    yield* takeEvery(ADD_TO_GALLERY, addToGallery);
}

