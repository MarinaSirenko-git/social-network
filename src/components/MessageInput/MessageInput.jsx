import React from 'react';
import './MessageInput.css';

function MessageInput({userMessageBody, changeChar, sendMessage }) {

  const handleTextareaChange = (e) => {
    changeChar(e.target.value)
  }

  const handleSubmit = (e) => {
    sendMessage(e);
  }

  return(
    <form className="message-input" onSubmit={handleSubmit}>
      <textarea className="message-input__text" placeholder="Введите сообщение" onChange={handleTextareaChange} value={userMessageBody} />
      <button className="message-input__button">Отправить</button>
    </form>
  )
}

export default MessageInput;