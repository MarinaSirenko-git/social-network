import { connect } from "react-redux";
import { 
  followActionCreator, 
  unfollowActionCreator, 
  setUsersActionCreator, 
  setCurrentPageActionCreator, 
  setUsersTotalCountActionCreator,
  setIsLoadingActionCreator
 } from "../redux/usersReducer";
import axios from 'axios';
import React from 'react';
import Users from './../components/Users/Users.jsx';
import Preloader from "../components/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.pageSize}`)
    .then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    })
    .catch((e) => console.log(e))
    .finally(() => {
      this.props.setIsLoading(false);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.pageSize}`)
    .then((res) => {
      this.props.setUsers(res.data.items); 
    })
    .catch((e) => console.log(e))
    .finally(() => {
      this.props.setIsLoading(false);
    })
  }

  render() {
    return (
    <>
    { this.props.isLoading ? <Preloader /> :
      <Users 
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollowUser={this.props.unfollowUser}
        followUser={this.props.followUser}
        />
      }
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
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
    },
    setIsLoading: (status) => {
      dispatch(setIsLoadingActionCreator(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);