import React, { useEffect } from 'react';
import Contact from '../Contact/Contact';
import FilterContacts from '../FilterContacts/FilterContacts';
import { getFirstChar } from '../../utils/utils';
import './Dialogs.css';
import MessagesBox from '../MessagesBox/MessagesBox';

function Dialogs({ dialogsElements, messagesElements, addDialogsThunk }) {
  useEffect(() => {
    addDialogsThunk();
  }, [dialogsElements, messagesElements]);

  return (
    <div className="dialogs">
      <div className="dialogs__contacts">
        <ul className="dialogs__list">
          <FilterContacts />
          {dialogsElements.map(
            (d) => (
              <Contact
                key={d.id}
                id={d.id}
                name={d.name}
                status={d.status}
                photoPath={d.photoPath === null ? getFirstChar(d.name) : d.photoPath}
              />
            ),
          )}
        </ul>
      </div>
      <MessagesBox messagesElements={messagesElements} />
    </div>
  );
}

export default Dialogs;
