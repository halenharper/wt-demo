import Message from './Message';
import { connect } from 'react-redux';
import {
  GET_MESSAGE_PENDING,
  NEW_MESSAGE_PENDING,
} from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  message: state.message,
  chatId: ownProps.params.id,
})

const mapDispatchToProps = (dispatch) => ({
  getMessage: (id) => dispatch({
    type: GET_MESSAGE_PENDING,
    payload: id,
  }),
  createMessage: (chatId, messageTitle) => dispatch({
    type: NEW_MESSAGE_PENDING,
    payload: { chat: chatId, message: messageTitle },
  }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Message);
