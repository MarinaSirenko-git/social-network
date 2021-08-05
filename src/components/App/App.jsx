import React from 'react';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Content from '../Content/Content.jsx'
import './App.css';

function App({ state, addPost, changeNewPostText }) {

  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content 
        dialogs={state.chatPage.dialogs} 
        messages={state.chatPage.messages} 
        posts={state.profilePage.posts} 
        newPostText={state.profilePage.newPostText} 
        addPost={addPost}
        changeNewPostText={changeNewPostText} />
    </div>
  );
}

export default App;
