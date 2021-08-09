import React from 'react';
import Dialogs from '../components/Dialogs/Dialogs.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Message from '../components/Message/Message.jsx';

function DialogsContainer({ store }){

  const state = store.getState();
  const dialogsElements = state.chatPage.dialogs.map(d => <Contact key={d.id} id={d.id} name={d.name} status={d.status} photoPath={d.photoPath} />);
  const messagesElements = state.chatPage.messages.map(m => <Message key={m.id} time={m.time} date={m.date} name={m.name} text={m.text} />);

  return (
    <Dialogs dialogsElements={dialogsElements} messagesElements={messagesElements} store={store} />
  )
}

export default DialogsContainer;