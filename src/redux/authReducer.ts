import { SET_USER_DATA, LOGIN, LOGOUT } from './actionTypeConsts';
import { authApi } from '../utils/api';

interface InitialStateType {
  id: null | number,
  email: null | string,
  login: null | string,
  isAuth: boolean,
}

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action: any): InitialStateType => {
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

type DataType = {
  id: null | string,
  email: null | string,
  login: null | string,
};

type SetAuthDataACType = {
  type: typeof SET_USER_DATA,
  data: DataType,
};

export const setAuthDataActionCreator = ({ id, email, login }: any): SetAuthDataACType => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

type SetIsAuthTrueACType = {
  type: typeof LOGIN,
};
export const setIsAuthTrueActionCreator = (): SetIsAuthTrueACType => ({
  type: LOGIN,
});

type SetIsAuthFalseACType = {
  type: typeof LOGOUT,
};
export const setIsAuthFalseActionCreator = (): SetIsAuthFalseACType => ({
  type: LOGOUT,
});

export const tokenCheckThunkCreator = () => async (dispatch: any) => {
  const res = await authApi.tokenCheck();
  if (res.resultCode === 0) {
    dispatch(setAuthDataActionCreator(res.data));
  }
};

export const loginThunkCreator = (email: string, password: string, isRememberMe: boolean): any => (
  (dispatch: any) => {
    authApi.login(email, password, isRememberMe)
      .then((data: any) => {
        if (data.resultCode === 0) {
          dispatch(setIsAuthTrueActionCreator);
        }
      });
  });

export const logoutThunkCreator = () => (dispatch: any) => {
  authApi.logout()
    .then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(setIsAuthFalseActionCreator);
      }
    });
};
