import React from 'react';
import { Route } from "react-router-dom";
import Profile from '../Profile/Profile.jsx';
import Dialogs from '../Dialogs/Dialogs.jsx';
import './Content.css';

function Content({dialogs, messages, posts, addPost}) {
  return (
    <main className="content">
      <Route path="/profile">
        <Profile posts={posts} addPost={addPost}/>
      </Route>
      <Route path="/dialogs">
        <Dialogs dialogs={dialogs} messages={messages} />
      </Route>
    </main>
  )
}

export default Content;