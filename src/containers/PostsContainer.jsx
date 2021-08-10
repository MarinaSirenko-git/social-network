import Posts from '../components/Posts/Posts.jsx';
import { postsActionCreator, changePostActionCreator } from './../redux/profileReducer.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeChar: (text) => {
      dispatch(changePostActionCreator(text));
    },
    publishPost: (e) => {
      e.preventDefault();
      dispatch(postsActionCreator());
    },
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;