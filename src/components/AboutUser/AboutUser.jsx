import React from 'react';
import './AboutUser.css';

function AboutUser(){
  return (
    <div className="about-user">
      <div className="about-user__avatar">
        <img
          className="about-user__img" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Paul_Thomas_Anderson_2007_crop.jpg/220px-Paul_Thomas_Anderson_2007_crop.jpg"
          alt="фото" />
      </div>
      <span className="about-user__desc about-user__desc_type_name">Пол Андерсон</span>
      <span className="about-user__desc">Кинорежиссёр</span>
    </div>
  )
}

export default AboutUser;