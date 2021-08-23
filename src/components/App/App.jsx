import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
