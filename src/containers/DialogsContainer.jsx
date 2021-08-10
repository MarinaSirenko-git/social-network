import React from 'react';
import { connect } from 'react-redux';
import Dialogs from '../components/Dialogs/Dialogs.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Message from '../components/Message/Message.jsx';

const mapStateToProps = (state) => {
  return {
    dialogsElements: state.chatPage.dialogs.map(d => <Contact key={d.id} id={d.id} name={d.name} status={d.status} photoPath={d.photoPath} />),
    messagesElements: state.chatPage.messages.map(m => <Message key={m.id} time={m.time} date={m.date} name={m.name} text={m.text} />),
  }
}

const mapDispatchToProps = () => {
  return {}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;