import React from 'react';
import Contact from '../Contact/Contact.jsx';
import FilterContacts from '../FilterContacts/FilterContacts.jsx'; 
import Message from '../Message/Message.jsx';
import './Dialogs.css';

function Dialogs({dialogs, messages}){
  const dialogsElements = dialogs.map(d => <Contact key={d.id} id={d.id} name={d.name} status={d.status} photoPath={d.photoPath} />);
  const messagesElements = messages.map(m => <Message key={m.id} time={m.time} date={m.date} name={m.name} text={m.text} />);
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
      </div>
    </div>
  )
}

export default Dialogs;