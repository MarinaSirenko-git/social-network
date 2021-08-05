import React from 'react';
import Post from '../Post/Post.jsx';
import './Posts.css';

function Posts({ posts, newPostText, addPost, changeNewPostText }) {
  const textariaElement = React.createRef();

  const handleTextariaChange = () => {
    const text = textariaElement.current.value;
    changeNewPostText(text)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPost();
  }

  return(
    <div className="post-container">
      <h2 className="post-container__title">Мои посты</h2>
      <form className="post-form" onSubmit={handleFormSubmit}>
        <textarea className="post-form__input" type="text" value={newPostText} onChange={handleTextariaChange} ref={textariaElement} />
        <button type="submit" className="post-form__btn">Опубликовать</button>
      </form>
      { posts.map(p => <Post key={p.id} userPhotoPath={p.userPhotoPath} text={p.text} />) }
    </div>
  )
}

export default Posts;