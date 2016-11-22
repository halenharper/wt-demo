import {
  GET_MESSAGE_PENDING,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAIL,
  NEW_MESSAGE_PENDING,
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_FAIL,
} from '../actions';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export function message(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE_PENDING:
    case NEW_MESSAGE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case NEW_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_MESSAGE_FAIL:
    case NEW_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
