/**
 * Created by Dasha on 21/04/16.
 */
import {takeEvery, takeLatest} from "redux-saga";
import {take, put, call, fork, select} from "redux-saga/effects";
import {MESSAGES_USER_LOAD, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE} from "../actions/messages.actions";

var messagesApi = require('../api/messages.api');
var messageActions = require('../actions/messages.actions');

function* loadMessages(data) {
    try {
        const response = yield call(messagesApi.loadMessagesForUser, data.payload.user_id);
        yield put(messageActions.success(response, MESSAGES_LOAD_SUCCESS));
    } catch (error) {
        yield put(messageActions.failure(error, MESSAGES_LOAD_FAILURE));
    }
}
/** watchers */

export function* watchMessagesLoad() {
    yield* takeEvery(MESSAGES_USER_LOAD, loadMessages);
}

