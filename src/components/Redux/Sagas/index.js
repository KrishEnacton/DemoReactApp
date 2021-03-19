import { takeEvery, all } from 'redux-saga/effects';
import { getApiData } from './GetRecordSaga'
import { CatchRequestInsert } from './InsertRecordSaga';
import { REQUEST_GET_RECORD, REQUEST_INSERT_RECORD } from '../Constants'

export function* allWatcher() {
    yield all([
        takeEvery(REQUEST_GET_RECORD, getApiData),
        takeEvery(REQUEST_INSERT_RECORD, CatchRequestInsert),
    ])
}