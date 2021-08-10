import React from 'react';
import { Route } from "react-router-dom";
import Profile from '../Profile/Profile.jsx';
import DialogsContainer from '../../containers/DialogsContainer.jsx';
import './Content.css';

function Content() {
  return (
    <main className="content">
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/dialogs">
        <DialogsContainer />
      </Route>
    </main>
  )
}

export default Content;