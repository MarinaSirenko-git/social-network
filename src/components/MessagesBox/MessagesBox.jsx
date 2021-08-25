import React, { useRef } from 'react';
import MessageInputContainer from '../../containers/MessageInputContainer';
import Message from '../Message/Message';
import './MessagesBox.css';

function MessagesBox({ messagesElements }) {
  const scrollEl = useRef(null);
  return (
    <div className="dialogs__messages">
      <ul className="dialogs__list dialogs__list_type_message-box" ref={scrollEl}>
        {messagesElements.map(
          (m) => (
            <Message
              key={m.id}
              time={m.time}
              date={m.date}
              owner={m.owner}
              text={m.text}
            />
          ),
        )}
      </ul>
      <MessageInputContainer />
    </div>
  );
}

export default MessagesBox;
