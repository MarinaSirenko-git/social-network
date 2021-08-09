import React from 'react';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Content from '../Content/Content.jsx'
import './App.css';

function App({ store }) {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content store={store} />  
    </div>
  );
}

export default App;
