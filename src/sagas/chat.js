import Axios from 'axios';
import { put } from 'redux-saga/effects';
import {
  GET_CHAT_PENDING,
  GET_CHAT_SUCCESS,
  GET_CHAT_FAIL,
  NEW_CHAT_SUCCESS,
  NEW_CHAT_FAIL,
} from '../actions';
import Constants from '../constants';

export function* getChat(action) {
  try {
    const chats = yield Axios.get(`${Constants.API_URL}/chat`);
    yield put({ type: GET_CHAT_SUCCESS, payload: chats.data });
  } catch (error) {
    yield put({ type: GET_CHAT_FAIL, payload: { error: error.message }});
  }
}

export function* postChat(action) {
  try {
    const chat = yield Axios.post(
      `${Constants.API_URL}/chat`,
      { ...action.payload }
    );
    yield put({ type: NEW_CHAT_SUCCESS });
    yield put({ type: GET_CHAT_PENDING });
  } catch (error) {
    yield put({ type: NEW_CHAT_FAIL, payload: { error: error.message }});
  }
}
