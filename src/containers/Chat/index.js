import Chat from './Chat';
import { connect } from 'react-redux';
import {
  GET_CHAT_PENDING,
  NEW_CHAT_PENDING,
} from '../../actions';

const mapStateToProps = (state) => ({
  chat: state.chat,
})

const mapDispatchToProps = (dispatch) => ({
  getChat: () => dispatch({ type: GET_CHAT_PENDING }),
  createChat: (chatTitle) => dispatch({ type: NEW_CHAT_PENDING, payload: chatTitle }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
