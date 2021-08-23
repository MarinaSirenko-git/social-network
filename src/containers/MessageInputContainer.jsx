import { connect } from 'react-redux';
import { changeMessageActionCreator, addMessageActionCreator } from '../redux/dialogsReducer';
import MessageInput from '../components/MessageInput/MessageInput';

const mapStateToProps = (state) => ({
  userMessageBody: state.userMessageBody,
});

const mapDispatchToProps = (dispatch) => ({
  changeChar: (value) => {
    dispatch(changeMessageActionCreator(value));
  },
  sendMessage: (e) => {
    e.preventDefault();
    dispatch(addMessageActionCreator());
  },
});

const MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput);
export default MessageInputContainer;
