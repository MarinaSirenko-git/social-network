import {changeMessageActionCreator, addMessageActionCreator} from './../redux/dialogsReducer.js';
import MessageInput from '../components/MessageInput/MessageInput.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    userMessageBody: state.userMessageBody,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeChar: (value) => {
      dispatch(changeMessageActionCreator(value));
    },
    sendMessage: (e) => {
      e.preventDefault();
      dispatch(addMessageActionCreator());
    } ,
  }
}

const MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput);
export default MessageInputContainer;