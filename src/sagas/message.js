import Axios from 'axios';
import { put } from 'redux-saga/effects';
import {
  GET_MESSAGE_PENDING,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAIL,
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_FAIL,
} from '../actions';
import Constants from '../constants';

export function* getMessage(action) {
  try {
    const messages = yield Axios.get(
      `${Constants.API_URL}/message?chat=${action.payload}`,
    );
    yield put({ type: GET_MESSAGE_SUCCESS, payload: messages.data });
  } catch (error) {
    yield put({ type: GET_MESSAGE_FAIL, payload: { error: error.message }});
  }
}

export function* postMessage(action) {
  try {
    yield Axios.post(
      `${Constants.API_URL}/message`,
      { ...action.payload }
    );
    yield put({ type: NEW_MESSAGE_SUCCESS });
    yield put({ type: GET_MESSAGE_PENDING, payload: action.payload.chat });
  } catch (error) {
    yield put({ type: NEW_MESSAGE_FAIL, payload: { error: error.message }});
  }
}
