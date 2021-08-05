import React from 'react';
import './Message.css';

function Message({time, date, name, text}) {
  return (
    <div className="message">
      <span className="message__date">{`${time} ${date}`}</span>
      <span className="message__user-name">{name}</span>
      <div className="message__text">{text}</div>
    </div>
  )
}

export default Message;