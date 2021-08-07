import React from 'react';
import {changeMessageActionCreator, addMessageActionCreator} from '../../redux/state.js';
import './MessageInput.css';

function MessageInput({dispatch, userMessageBody}){
  const handleChange = (e) => {
    dispatch(changeMessageActionCreator(e.target.value));
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessageActionCreator());
  }
  return(
    <form className="message-input" onSubmit={handleSubmit}>
      <textarea className="message-input__text" placeholder="Введите сообщение" onChange={handleChange} value={userMessageBody} />
      <button className="message-input__button">Отправить</button>
    </form>
  )
}

export default MessageInput;