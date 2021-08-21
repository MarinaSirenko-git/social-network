import { CHANGE_POST_TEXT, ADD_POST, SET_USER_PROFILE, SET_USER_STATUS } from './actionTypeConsts.js';
import { profileApi} from '../utils/api.js';

const initialState = {
  posts: [
    {
      id: Math.random(), 
      userPhotoPath: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      text: 'Make your mama sad type Make your girlfriend mad tight Might seduce your dad type I am the bad guy, duh I am the bad guy, duh'
    },
],
  newPostText: '',
  userProfile: null,
  userStatus: '',
};

// Если в profileReducer не будет передано значение state, то state по умолчанию будет равен initialState.
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST_TEXT:
      return {
        ...state,
        newPostText: action.postText,
      }
    case ADD_POST:
      const newPost = {
        id: Math.random(),
        userPhotoPath: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        text: state.newPostText,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    case SET_USER_PROFILE:
      return {
        ...state, 
        userProfile: action.userProfile,
      }
    case SET_USER_STATUS:
      return {
        ...state, 
        userStatus: action.userStatus,
      }  
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
    postText: text
  }
}

export const setUserProfileActionCreator = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile,
  }
}

export const setUserStatusActionCreator = (userStatus) => {
  return {
    type: SET_USER_STATUS,
    userStatus,
  }
}

export const getUserDataThunkCreator = (userId) => {
  return (dispatch) => {
    profileApi.getUserData(userId)
    .then((data) => dispatch(setUserProfileActionCreator(data)))
    .catch((e) => console.log(e))
  }
}

export const getUserStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId)
    .then((status) => {
      dispatch(setUserStatusActionCreator(status))})
    .catch((e) => console.log(e))
  }
}

export const updateUserStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status)
    .then((data) => {
      if(data.resultCode === 0) dispatch(setUserStatusActionCreator(data.status))
    })
    .catch((e) => console.log(e))
  }
}
