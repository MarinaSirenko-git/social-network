import React from 'react';
import {changeMessageActionCreator, addMessageActionCreator} from './../redux/dialogsReducer.js';
import MessageInput from '../components/MessageInput/MessageInput.jsx'

function MessageInputContainer({ store }) {

  const state = store.getState().chatPage;

  const changeChar = (value) => {
    store.dispatch(changeMessageActionCreator(value));  
  }
  const sendMessage = (e) => {
    e.preventDefault();
    store.dispatch(addMessageActionCreator());
  }
  return(
    <MessageInput 
      userMessageBody={state.userMessageBody} 
      changeChar={changeChar}
      sendMessage={sendMessage} 
    />
  )
}

export default MessageInputContainer;