import {
  GET_CHAT_PENDING,
  GET_CHAT_SUCCESS,
  GET_CHAT_FAIL,
  NEW_CHAT_PENDING,
  NEW_CHAT_SUCCESS,
  NEW_CHAT_FAIL,
} from '../actions';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export function chat(state = initialState, action) {
  switch (action.type) {
    case GET_CHAT_PENDING:
    case NEW_CHAT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case NEW_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_CHAT_FAIL:
    case NEW_CHAT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
