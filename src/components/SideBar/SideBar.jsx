import React from 'react';
import {
  NavLink
} from "react-router-dom";
import './SideBar.css';

function SideBar() {
  return(
    <nav className="side-bar">
      <ul className="side-bar__list">
        <li className="side-bar__item">
          <NavLink to="/profile" className="side-bar__link" activeClassName="side-bar__link_active">Профиль</NavLink>
        </li>
        <li className="side-bar__item">
          <NavLink to="/dialogs" className="side-bar__link" activeClassName="side-bar__link_active">Сообщения</NavLink>
        </li>
        <li className="side-bar__item">
          <NavLink to="/users" className="side-bar__link" activeClassName="side-bar__link_active">Поиск друзей</NavLink>
          </li>
        <li className="side-bar__item">
          <NavLink to="/music" className="side-bar__link" activeClassName="side-bar__link_active">Музыка</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar;