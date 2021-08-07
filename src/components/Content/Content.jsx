import React from 'react';
import { Route } from "react-router-dom";
import Profile from '../Profile/Profile.jsx';
import Dialogs from '../Dialogs/Dialogs.jsx';
import './Content.css';

function Content({ dialogs, messages, posts, newPostText, userMessageBody, dispatch }) {
  return (
    <main className="content">
      <Route path="/profile">
        <Profile posts={posts} dispatch={dispatch} newPostText={newPostText} />
      </Route>
      <Route path="/dialogs">
        <Dialogs dialogs={dialogs} messages={messages} userMessageBody={userMessageBody} dispatch={dispatch} />
      </Route>
    </main>
  )
}

export default Content;