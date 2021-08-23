import { connect } from 'react-redux';
import React from 'react';
import {
  setCurrentPageActionCreator,
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator,
} from '../redux/usersReducer';
import Users from '../components/Users/Users';
import Preloader from '../components/Preloader/Preloader';
import AuthRedirect from '../hoc/AuthRedirect';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersThunk(pageNumber, this.pageSize);
  }

  render() {
    return (
      <>
        { this.props.isLoading ? <Preloader />
          : (
            <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              unfollowUserThunk={this.props.unfollowUserThunk}
              followUserThunk={this.props.followUserThunk}
              isFetching={this.props.isFetching}
            />
          )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
  isFetching: state.usersPage.isFetching,
  isAuth: state.auth.isAuth,
});

const withAuthRedirectUsers = AuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
  followUserThunk: followUserThunkCreator,
  unfollowUserThunk: unfollowUserThunkCreator,
  setCurrentPage: setCurrentPageActionCreator,
  getUsersThunk: getUsersThunkCreator,
})(withAuthRedirectUsers);
