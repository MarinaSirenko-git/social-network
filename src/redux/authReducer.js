import { SET_USER_DATA } from './actionTypeConsts.js'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    return {
      ...state,
      ...action.data,
      isAuth: true
    }
    default:
      return state;
  }
}

export const setAuthDataActionCreator = ({id, email, login}) => {
  return {
    type: SET_USER_DATA,
    data: {id, email, login}
  }
}