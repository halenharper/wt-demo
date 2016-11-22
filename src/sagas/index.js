import { takeEvery } from 'redux-saga';
import {
  GET_CHAT_PENDING,
  NEW_CHAT_PENDING,
} from '../actions';
import {
  getChat,
  postChat,
} from './chat';

export default function* rootSaga() {
  yield [
    takeEvery(GET_CHAT_PENDING, getChat),
    takeEvery(NEW_CHAT_PENDING, postChat),
  ]
}
