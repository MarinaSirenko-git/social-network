import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { addPost } from './redux/state.js';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App dialogs={state.chatPage.dialogs} messages={state.chatPage.messages} posts={state.profilePage.posts} addPost={addPost}/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}