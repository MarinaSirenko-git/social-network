import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Content from '../Content/Content.jsx'
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
