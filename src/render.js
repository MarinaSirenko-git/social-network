import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { addPost } from './redux/state.js';
import { changeNewPostText } from './redux/state.js';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}