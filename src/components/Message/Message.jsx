import React from 'react';
import { Comment, Tooltip } from 'antd';
import moment from 'moment';
import './Message.css';

function Message({ owner, text }) {
  return (
    <li className="message">
      <Comment
        author={<p>{owner}</p>}
        content={
          <p>{text}</p>
      }
        datetime={(
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
      )}
      />
    </li>
  );
}

export default Message;
