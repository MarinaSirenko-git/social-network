import React from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css';

function Contact({ name, status, photoPath, id}){
  return (
    <li className="contact">
      <NavLink className="contact__link" activeClassName="contact__link_active" to={`/dialogs/${id}`}>
        <img className="contact__photo" src={photoPath} alt={`аватар пользователя ${name}`} />
        <span className="contact__name">{name}</span>
        <span className="contact__status">{status}</span>
      </NavLink>
    </li>
  )
}

export default Contact;