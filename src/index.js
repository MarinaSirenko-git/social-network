import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import {store} from './redux/state.js';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)}/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);