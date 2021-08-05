import React from 'react';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Content from '../Content/Content.jsx'
import './App.css';

function App({ dialogs, messages, posts, addPost }) {

  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content dialogs={dialogs} messages={messages} posts={posts} addPost={addPost} />
    </div>
  );
}

export default App;
