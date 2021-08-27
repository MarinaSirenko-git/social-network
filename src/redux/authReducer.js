import { SET_USER_DATA, LOGIN, LOGOUT } from './actionTypeConsts';
import { authApi } from '../utils/api';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        id: null,
        email: null,
        login: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setAuthDataActionCreator = ({ id, email, login }) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const setIsAuthTrueActionCreator = () => ({
  type: LOGIN,
});

export const setIsAuthFalseActionCreator = () => ({
  type: LOGOUT,
});

export const tokenCheckThunkCreator = () => async (dispatch) => {
  const res = await authApi.tokenCheck();
  if (res.resultCode === 0) {
    dispatch(setAuthDataActionCreator(res.data));
  }
};

export const loginThunkCreator = (email, password, isRememberMe) => (dispatch) => {
  authApi.login(email, password, isRememberMe)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setIsAuthTrueActionCreator);
      }
    });
};

export const logoutThunkCreator = () => (dispatch) => {
  authApi.logout()
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setIsAuthFalseActionCreator);
      }
    });
};
