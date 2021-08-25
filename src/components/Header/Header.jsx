import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './Header.css';

function Header({ isAuth, logoutThank }) {
  const handleClickLogoutButton = () => {
    logoutThank();
      <Redirect to="/login" />;
  };

  return (
    <header className="header">
      <img
        className="logo"
        src="https://image.flaticon.com/icons/png/512/8/8723.png"
        alt="логотип"
      />
      <p className="header__user-name">{isAuth ? <button type="button" onClick={handleClickLogoutButton} className="header__link">Выйти</button> : <NavLink className="header__link" to="/login">Войти</NavLink>}</p>
    </header>
  );
}

export default Header;
