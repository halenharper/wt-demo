import { takeEvery } from 'redux-saga';
import {
  GET_CHAT_PENDING,
  NEW_CHAT_PENDING,
  GET_MESSAGE_PENDING,
  NEW_MESSAGE_PENDING,
} from '../actions';
import {
  getChat,
  postChat,
} from './chat';
import {
  getMessage,
  postMessage,
} from './message';

export default function* rootSaga() {
  yield [
    takeEvery(GET_CHAT_PENDING, getChat),
    takeEvery(NEW_CHAT_PENDING, postChat),
    takeEvery(GET_MESSAGE_PENDING, getMessage),
    takeEvery(NEW_MESSAGE_PENDING, postMessage),
  ]
}
