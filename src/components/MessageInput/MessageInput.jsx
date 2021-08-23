import React from 'react';
import { Input, Button } from 'antd';
import './MessageInput.css';

function MessageInput({ userMessageBody, changeChar, sendMessage }) {
  const { TextArea } = Input;

  const handleTextareaChange = (e) => {
    changeChar(e.target.value);
  };

  const handleSubmit = (e) => {
    sendMessage(e);
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <TextArea className="message-input__text" placeholder="Введите сообщение" onChange={handleTextareaChange} value={userMessageBody} rows={4} />
      <Button onClick={handleSubmit} type="primary">Отправить</Button>
    </form>
  );
}

export default MessageInput;
