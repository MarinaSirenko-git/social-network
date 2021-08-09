import { CHANGE_POST_TEXT, ADD_POST } from './actionTypeConsts.js';

const initialState = {
  posts: [
    {
      id: Math.random(), 
      userPhotoPath: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Paul_Thomas_Anderson_2007_crop.jpg',
      text: 'Make your mama sad type Make your girlfriend mad tight Might seduce your dad type I am the bad guy, duh I am the bad guy, duh'
    },
],
  newPostText: '',
};

// Если в profileReducer не будет передано значение state, то state по умолчанию будет равен initialState.
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: Math.random(),
        userPhotoPath: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Paul_Thomas_Anderson_2007_crop.jpg',
        text: state.newPostText,
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case CHANGE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

// объекты со свойством type, и значениями, необходимыми для работы reducer-ф-й, обернуты в стрелочные ф-ии,
// чтобы наш компонент как можно меньше знал о логике работы с данными, и лишь вызывал отдельные ф-ии по необходимости
export const postsActionCreator = () => {
  return {
    type: ADD_POST,
  }
}

export const changePostActionCreator = (text) => {
  return {
    type: CHANGE_POST_TEXT,
    newText: text
  }
}


