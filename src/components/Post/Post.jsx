import React from 'react';
import './Post.css'

function Post() {
  return(
    <div className="post">
      <div className="post__user-avatar">
        <img className="post__user-img" src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Paul_Thomas_Anderson_2007_crop.jpg" alt="фото" />
      </div>
      <p className="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque odio esse ea? Iste voluptatibus odit reiciendis? Quos, ratione aperiam. Atque, quis. Deserunt cupiditate explicabo accusantium repudiandae architecto odit optio.</p>
    </div>
  )
}

export default Post;