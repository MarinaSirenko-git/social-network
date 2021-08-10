import React from 'react';
import FilterContacts from '../FilterContacts/FilterContacts.jsx'; 
import MessageInputContainer from '../../containers/MessageInputContainer.jsx';
import './Dialogs.css';

function Dialogs({ dialogsElements, messagesElements }) {

  return(
    <div className="dialogs">
      <div className="dialogs__contacts">
        <ul className="dialogs__list">
          <FilterContacts />
          {dialogsElements}
        </ul>
      </div>
      <div className="dialogs__messages">
        {messagesElements}
        <MessageInputContainer />
      </div>
    </div>
  )
}

export default Dialogs;