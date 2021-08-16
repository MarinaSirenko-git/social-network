import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header({isAuth, userName}) {
 return (
  <header className="header">
    <img 
    className="logo" 
    src="https://image.flaticon.com/icons/png/512/8/8723.png" 
    alt="логотип" />
    {isAuth ? userName : <NavLink className="header__link" to={'/login'}>Войти</NavLink>}
  </header>
 )
}

export default Header;