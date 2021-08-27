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

const initialState = {
  users: [],
  pageSize: 24,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  isFetching: [],
};

export const usersReducer = (state = initialState, action) => {
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

export const followActionCreator = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersActionCreator = (data) => ({
  type: USERS_QUERY,
  usersData: data,
});

export const setCurrentPageActionCreator = (value) => ({
  type: CURRENT_PAGE,
  currentPage: value,
});

export const setUsersTotalCountActionCreator = (totalCount) => ({
  type: TOTAL_COUNT,
  totalCount,
});

export const setIsLoadingActionCreator = (status) => ({
  type: IS_LOADING,
  status,
});

export const setIsFetchingActionCreator = (status, userId) => ({
  type: IS_FETCHING,
  status,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  // dispatch(setIsLoadingActionCreator(true));
  usersApi.getUsers(currentPage, pageSize)
    .then((data) => {
      dispatch(setUsersActionCreator(data.items));
      dispatch(setUsersTotalCountActionCreator(data.totalCount));
    })
    .catch((e) => console.log(e))
    .finally(() => {
      dispatch(setIsLoadingActionCreator(false));
    });
};

export const followUnfollowFlow = (dispatch, userId, fetchingAC, apiMethod, followAC) => {
  dispatch(fetchingAC(true, userId));
  apiMethod(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId));
      }
    })
    .catch((e) => console.log(e))
    .finally(() => dispatch(fetchingAC(false, userId)));
};

export const followUserThunkCreator = (userId) => (dispatch) => {
  const apiMethod = usersApi.followUserQuery;
  const followAC = followActionCreator;
  const fetchingAC = setIsFetchingActionCreator;
  followUnfollowFlow(dispatch, userId, fetchingAC, apiMethod, followAC);
};

export const unfollowUserThunkCreator = (userId) => (dispatch) => {
  const apiMethod = usersApi.unfollowUserQuery;
  const followAC = unfollowActionCreator;
  const fetchingAC = setIsFetchingActionCreator;
  followUnfollowFlow(dispatch, userId, fetchingAC, apiMethod, followAC);
};
