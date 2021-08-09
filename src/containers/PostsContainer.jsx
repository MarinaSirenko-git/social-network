import React from 'react';
import Posts from '../components/Posts/Posts.jsx';
import { postsActionCreator, changePostActionCreator } from './../redux/profileReducer.js'

function PostsContainer({ store }) {

  const state = store.getState().profilePage;
  
  const changeChar = (value) => {
    store.dispatch(changePostActionCreator(value))
  }

  const publishPost = (e) => {
    e.preventDefault();
    store.dispatch(postsActionCreator());
  }

  return(
    <Posts 
      changeChar={changeChar} 
      publishPost={publishPost} 
      posts={state.posts} 
      newPostText={state.newPostText}
    />
  )
}

export default PostsContainer;