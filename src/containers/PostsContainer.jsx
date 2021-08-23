import { connect } from 'react-redux';
import Posts from '../components/Posts/Posts';
import { postsActionCreator, changePostActionCreator } from '../redux/profileReducer';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  changeChar: (text) => {
    dispatch(changePostActionCreator(text));
  },
  publishPost: (e) => {
    e.preventDefault();
    dispatch(postsActionCreator());
  },
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
