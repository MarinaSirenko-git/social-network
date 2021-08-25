import React from 'react';
import { Route } from 'react-router-dom';
import DialogsContainer from '../../containers/DialogsContainer';
import UsersContainer from '../../containers/UsersContainer';
import ProfileContainer from '../../containers/ProfileContainer';
import LoginContainer from '../../containers/LoginContainer';
import './Content.css';

function Content() {
  return (
    <main className="content">
      <Route path="/profile/:userId?">
        <ProfileContainer />
      </Route>
      <Route path="/dialogs">
        <DialogsContainer />
      </Route>
      <Route path="/users">
        <UsersContainer />
      </Route>
      <Route path="/login">
        <LoginContainer />
      </Route>
    </main>
  );
}

export default Content;
