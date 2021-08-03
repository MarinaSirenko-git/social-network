import React from 'react';
import { Route } from "react-router-dom";
import Profile from '../Profile/Profile.jsx';
import Dialogs from '../Dialogs/Dialogs.jsx';
import './Content.css';

function Content() {
  return (
    <main className="content">
      <Route path="/profile" component={Profile} />
      <Route path="/dialogs" component={Dialogs} />
    </main>
  )
}

export default Content;