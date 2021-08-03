import React from 'react';
import './Poster.css';

function Poster() {
 return(
   <div className="poster">
     <img 
      className="poster__img" 
      src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      alt="Обложка" />
   </div>
 )
}

export default Poster;