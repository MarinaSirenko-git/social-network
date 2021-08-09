import React from 'react';
import { Route } from "react-router-dom";
import Profile from '../Profile/Profile.jsx';
import DialogsContainer from '../../containers/DialogsContainer.jsx';
import './Content.css';

function Content({ store }) {
  return (
    <main className="content">
      <Route path="/profile">
        <Profile store={store} />
      </Route>
      <Route path="/dialogs">
        <DialogsContainer store={store} />
      </Route>
    </main>
  )
}

export default Content;