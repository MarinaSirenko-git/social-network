import { connect } from "react-redux";
import { 
  followActionCreator, 
  unfollowActionCreator, 
  setUsersActionCreator, 
  setCurrentPageActionCreator, 
  setUsersTotalCountActionCreator,
  setIsLoadingActionCreator,
  setIsFetchingActionCreator
 } from "../redux/usersReducer";
import React from 'react';
import Users from './../components/Users/Users.jsx';
import Preloader from "../components/Preloader/Preloader";
import { getUsers } from '../utils/api.js';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsLoading(true);
    getUsers(this.props.currentPage, this.pageSize)
    .then((data) => {
      this.props.setUsers(data.items);
      this.props.setUsersTotalCount(data.totalCount);
    })
    .catch((e) => console.log(e))
    .finally(() => {
      this.props.setIsLoading(false);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsLoading(true);
    getUsers(pageNumber, this.pageSize)
    .then((data) => {
      this.props.setUsers(data.items); 
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
        setIsFetching={this.props.setIsFetching}
        isFetching={this.props.isFetching}
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
    isLoading: state.usersPage.isLoading,
    isFetching: state.usersPage.isFetching,
 }
}

export default connect(mapStateToProps, {
  followUser: followActionCreator,
  unfollowUser: unfollowActionCreator,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setUsersTotalCount: setUsersTotalCountActionCreator,
  setIsLoading: setIsLoadingActionCreator,
  setIsFetching: setIsFetchingActionCreator,
  })(UsersContainer);