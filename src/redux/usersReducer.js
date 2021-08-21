import { 
  FOLLOW, 
  UNFOLLOW, 
  USERS_QUERY, 
  CURRENT_PAGE, 
  TOTAL_COUNT, 
  IS_LOADING,
  IS_FETCHING } from "./actionTypeConsts";

import { usersApi } from "../utils/api";

const initialState = {
  users: [],
  pageSize: 24,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  isFetching: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, isFollow: true}
          }
          return u;
        })
      }
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, isFollow: false}
          }
          return u;
        })
      }
    case USERS_QUERY: 
      return {
        ...state,  
        users: [...action.usersData]
      }
    case CURRENT_PAGE: 
      return {
        ...state,  
        currentPage: action.currentPage, 
      }
    case TOTAL_COUNT: 
      return {
        ...state,  
        totalUsersCount: action.totalCount, 
      }
    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.status
      }
    }
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.status ? 
        [...state.isFetching, action.userId] : 
        state.isFetching.filter((id) => id !== action.userId)
      }
    }
    default:
      return state;
  }
}

export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId,
  }
}

export const unfollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  }
}

export const setUsersActionCreator = (data) => {
  return {
    type: USERS_QUERY,
    usersData: data,
  }
}

export const setCurrentPageActionCreator = (value) => {
  return {
    type: CURRENT_PAGE,
    currentPage: value,
  }
}

export const setUsersTotalCountActionCreator = (totalCount) => {
  return {
    type: TOTAL_COUNT,
    totalCount,
  }
}

export const setIsLoadingActionCreator = (status) => {
  return {
    type: IS_LOADING,
    status,
  }
}

export const setIsFetchingActionCreator = (status, userId) => {
  return {
    type: IS_FETCHING,
    status,
    userId
  }
}

export const getUsersThunkCreator = (currentPage, pageSize) => { 
  return (dispatch) => {
    // dispatch(setIsLoadingActionCreator(true));
    usersApi.getUsers(currentPage, pageSize)
    .then((data) => {
      dispatch(setUsersActionCreator(data.items));
      dispatch(setUsersTotalCountActionCreator(data.totalCount));
    })
    .catch((e) => console.log(e))
    .finally(() => {
      dispatch(setIsLoadingActionCreator(false));
    })
  }
}

export const followUserThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setIsFetchingActionCreator(true, userId))
    usersApi.followUserQuery(userId)
    .then(data => {
      if(data.resultCode === 0) {
        dispatch(followActionCreator(userId))
      }
    })
    .catch(e => console.log(e))
    .finally(() => dispatch(setIsFetchingActionCreator(false, userId)))
  }
}

export const unfollowUserThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setIsFetchingActionCreator(true, userId))
    usersApi.unfollowUserQuery(userId)
    .then(data => {
      if(data.resultCode === 0) {
        dispatch(unfollowActionCreator(userId))
      }
    })
    .catch(e => console.log(e))
    .finally(() => dispatch(setIsFetchingActionCreator(false, userId)))
  }
}