import { connect } from "react-redux";
import Users from "../components/Users/Users";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator } from "../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollowUser: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (usersData) => {
      dispatch(setUsersActionCreator(usersData))
    },
    setCurrentPage: (value) => {
      dispatch(setCurrentPageActionCreator(value))
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;