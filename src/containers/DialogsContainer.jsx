import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from '../components/Dialogs/Dialogs';
import Contact from '../components/Contact/Contact';
import Message from '../components/Message/Message';
import AuthRedirect from '../hoc/AuthRedirect';

const mapStateToProps = (state) => ({
  dialogsElements: state.chatPage.dialogs.map(
    (d) => (
      <Contact
        key={d.id}
        id={d.id}
        name={d.name}
        status={d.status}
        photoPath={d.photoPath}
      />
    ),
  ),
  messagesElements: state.chatPage.messages.map(
    (m) => (
      <Message
        key={m.id}
        time={m.time}
        date={m.date}
        owner={m.owner}
        text={m.text}
      />
    ),
  ),
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = () => ({

});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect,
)(Dialogs);
