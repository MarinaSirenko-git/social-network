import { FOLLOW, UNFOLLOW, USERS_QUERY, CURRENT_PAGE, TOTAL_COUNT } from "./actionTypeConsts";

const initialState = {
  users: [],
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
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