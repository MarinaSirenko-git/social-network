const profileReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost = {
        id: Math.random(),
        userPhotoPath: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Paul_Thomas_Anderson_2007_crop.jpg',
        text: state.newPostText,
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case 'CHANGE-POST-TEXT':
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export default profileReducer;

