import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import store from './redux/reduxStore.js';

let rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App store={store} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(()=> {
  const state = store.getState();
  rerenderEntireTree(state);
});