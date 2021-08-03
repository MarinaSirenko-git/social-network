import React from 'react';
import './SideBar.css';

function SideBar() {
  return(
    <nav className="side-bar">
      <ul className="side-bar__list">
        <li className="side-bar__item">Профиль</li>
        <li className="side-bar__item">Сообщения</li>
        <li className="side-bar__item">Новости</li>
        <li className="side-bar__item">Музыка</li>
      </ul>
    </nav>
  )
}

export default SideBar;