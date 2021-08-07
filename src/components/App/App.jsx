import React from 'react';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Content from '../Content/Content.jsx'
import './App.css';

function App({ state, dispatch }) {

  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content 
        dialogs={state.chatPage.dialogs} 
        messages={state.chatPage.messages} 
        posts={state.profilePage.posts} 
        newPostText={state.profilePage.newPostText}
        userMessageBody={state.chatPage.userMessageBody}
        dispatch={dispatch}/>
    </div>
  );
}

export default App;
