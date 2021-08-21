import React from 'react';
import { Route } from "react-router-dom";
import DialogsContainer from '../../containers/DialogsContainer.jsx';
import UsersContainer from '../../containers/UsersContainer.jsx';
import ProfileContainer from '../../containers/ProfileContainer.jsx';
import Login from '../Login/Login.jsx';
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
        <Login />
      </Route>
    </main>
  )
}

export default Content;