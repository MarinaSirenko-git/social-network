import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { UserType } from '../types/types';
import { RootReducerStateType } from './reduxStore';
import {
  FOLLOW,
  UNFOLLOW,
  USERS_QUERY,
  CURRENT_PAGE,
  TOTAL_COUNT,
  IS_LOADING,
  IS_FETCHING,
} from './actionTypeConsts';

import { usersApi } from '../utils/api';
import { changeObjectInArray } from '../utils/utils';

type InitialStateType = {
  users: Array<UserType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isLoading: boolean,
  isFetching: Array<number>,
};

const initialState: InitialStateType = {
  users: [],
  pageSize: 24,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  isFetching: [],
};

type ActionsTypes = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType |
SetUsersTotalCountACType | SetIsLoadingACType | SetIsFetchingACType;

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: changeObjectInArray(state.users, action.userId, 'id', { isFollow: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: changeObjectInArray(state.users, action.userId, 'id', { isFollow: false }),
      };
    case USERS_QUERY:
      return {
        ...state,
        users: [...action.usersData],
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.status,
      };
    }
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.status
          ? [...state.isFetching, action.userId]
          : state.isFetching.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

type FollowACType = {
  type: typeof FOLLOW,
  userId: number,
};
export const followActionCreator = (userId: number): FollowACType => ({
  type: FOLLOW,
  userId,
});

type UnfollowACType = {
  type: typeof UNFOLLOW,
  userId: number,
};

export const unfollowActionCreator = (userId: number): UnfollowACType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersACType = {
  type: typeof USERS_QUERY,
  usersData: Array<UserType>,
};

export const setUsersActionCreator = (data: Array<UserType>): SetUsersACType => ({
  type: USERS_QUERY,
  usersData: data,
});

type SetCurrentPageACType = {
  type: typeof CURRENT_PAGE,
  currentPage: number,
};

export const setCurrentPageActionCreator = (value: number): SetCurrentPageACType => ({
  type: CURRENT_PAGE,
  currentPage: value,
});

type SetUsersTotalCountACType = {
  type: typeof TOTAL_COUNT,
  totalCount: number,
};

export const setUsersTotalCountActionCreator = (totalCount: number): SetUsersTotalCountACType => ({
  type: TOTAL_COUNT,
  totalCount,
});

type SetIsLoadingACType = {
  type: typeof IS_LOADING,
  status: boolean,
};

export const setIsLoadingActionCreator = (status: boolean): SetIsLoadingACType => ({
  type: IS_LOADING,
  status,
});

type SetIsFetchingACType = {
  type: typeof IS_FETCHING,
  status: boolean,
  userId: number,
};

export const setIsFetchingActionCreator = (status: boolean, userId: number): SetIsFetchingACType => ({
  type: IS_FETCHING,
  status,
  userId,
});

type ThunkType = ThunkAction<any, RootReducerStateType, unknown, ActionsTypes>;
export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => (dispatch) => {
  // dispatch(setIsLoadingActionCreator(true));
  usersApi.getUsers(currentPage, pageSize)
    .then((data: any) => {
      dispatch(setUsersActionCreator(data.items));
      dispatch(setUsersTotalCountActionCreator(data.totalCount));
    })
    .catch((e: string) => console.log(e))
    .finally(() => {
      dispatch(setIsLoadingActionCreator(false));
    });
};

const followUnfollowFlow = (
  dispatch: Dispatch<ActionsTypes>,
  userId: number,
  fetchingAC: any,
  apiMethod: any,
  followAC: (userId: number) => FollowACType | UnfollowACType,
) => {
  dispatch(fetchingAC(true, userId));
  apiMethod(userId)
    .then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId));
      }
    })
    .catch((e: string) => console.log(e))
    .finally(() => dispatch(fetchingAC(false, userId)));
};

export const followUserThunkCreator = (userId: number): ThunkType => (dispatch) => {
  const apiMethod = usersApi.followUserQuery;
  const followAC = followActionCreator;
  const fetchingAC = setIsFetchingActionCreator;
  followUnfollowFlow(dispatch, userId, fetchingAC, apiMethod, followAC);
};

export const unfollowUserThunkCreator = (userId: number): ThunkType => (dispatch) => {
  const apiMethod = usersApi.unfollowUserQuery;
  const followAC = unfollowActionCreator;
  const fetchingAC = setIsFetchingActionCreator;
  followUnfollowFlow(dispatch, userId, fetchingAC, apiMethod, followAC);
};
