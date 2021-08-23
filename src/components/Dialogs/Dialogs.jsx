import React from 'react';
import { Redirect } from 'react-router-dom';
import FilterContacts from '../FilterContacts/FilterContacts';
import MessageInputContainer from '../../containers/MessageInputContainer';
import './Dialogs.css';

function Dialogs({ dialogsElements, messagesElements, isAuth }) {
  if (isAuth === false) { return <Redirect to="/login" />; }
  return (
    <div className="dialogs">
      <div className="dialogs__contacts">
        <ul className="dialogs__list">
          <FilterContacts />
          {dialogsElements}
        </ul>
      </div>
      <div className="dialogs__messages">
        <ul className="dialogs__list dialogs__list_type_message-box">
          {messagesElements}
        </ul>
        <MessageInputContainer />
      </div>
    </div>
  );
}

export default Dialogs;
