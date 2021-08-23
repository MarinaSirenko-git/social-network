import React from 'react';
import { Input, Button } from 'antd';
import Post from '../Post/Post';
import './Posts.css';

function Posts({
  posts, newPostText, changeChar, publishPost,
}) {
  const { TextArea } = Input;

  const handleTextariaChange = (e) => {
    changeChar(e.target.value);
  };

  const handleFormSubmit = (e) => {
    publishPost(e);
  };

  return (
    <div className="post-container">
      <h2 className="post-container__title">Мои посты</h2>
      <form className="post-form" onSubmit={handleFormSubmit}>
        <TextArea
          rows={4}
          placeholder="Введите сообщение"
          onChange={handleTextariaChange}
          value={newPostText}
        />
        <Button type="primary">Опубликовать</Button>
      </form>
      { posts.map((p) => <Post key={p.id} userPhotoPath={p.userPhotoPath} text={p.text} />) }
    </div>
  );
}

export default Posts;
