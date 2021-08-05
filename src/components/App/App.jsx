import React from 'react';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Content from '../Content/Content.jsx'
import './App.css';

function App({ dialogs, messages, posts }) {

  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content dialogs={dialogs} messages={messages} posts={posts} />
    </div>
  );
}

export default App;
