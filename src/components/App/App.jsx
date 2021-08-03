import React from 'react';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Content from '../Content/Content.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
