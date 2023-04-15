import { takeLatest, fork, put } from "redux-saga/effects";
import axios from "axios";
import appActions from "../actions/actions";
import config from "../../config";

function* getCurrentReading({ device_id }) {
  try {
    const response = yield axios.get(
      `${config.SERVER_URL}/current_reading/${device_id}`
    );
    yield put({
      type: appActions.GET_CURRENT_READING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: appActions.GET_CURRENT_READING_ERROR, payload: error });
  }
}

function* watchGetCurrentReading() {
  yield takeLatest(appActions.GET_CURRENT_READING_REQUEST, getCurrentReading);
}

function* getSummary({ device_id }) {
  try {
    const response = yield axios.get(
      `${config.SERVER_URL}/summary/${device_id}`
    );
    yield put({
      type: appActions.GET_SUMMARY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: appActions.GET_SUMMARY_ERROR, payload: error });
  }
}

function* watchGetSummary() {
  yield takeLatest(appActions.GET_SUMMARY_REQUEST, getSummary);
}

function* getNotifications({ device_id }) {
  try {
    const response = yield axios.get(
      `${config.SERVER_URL}/notifications_by_device/${device_id}`
    );
    yield put({
      type: appActions.GET_NOTIFICATIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: appActions.GET_NOTIFICATIONS_ERROR, payload: error });
  }
}

function* watchGetNotifications() {
  yield takeLatest(appActions.GET_NOTIFICATIONS_REQUEST, getNotifications);
}

export default function* rootSaga() {
  yield fork(watchGetCurrentReading);
  yield fork(watchGetSummary);
  yield fork(watchGetNotifications);
}
