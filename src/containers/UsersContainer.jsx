import { connect } from 'react-redux';
import React from 'react';
import {
  getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsLoading, getisFetching, getIsAuth,
} from '../redux/usersSelector';
import {
  setCurrentPageActionCreator,
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator,
} from '../redux/usersReducer';
import { addDialogActionCreator } from '../redux/dialogsReducer';
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
              addDialog={this.props.addDialog}
            />
          )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isLoading: getIsLoading(state),
  isFetching: getisFetching(state),
  isAuth: getIsAuth(state),
});

const withAuthRedirectUsers = AuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
  followUserThunk: followUserThunkCreator,
  unfollowUserThunk: unfollowUserThunkCreator,
  setCurrentPage: setCurrentPageActionCreator,
  getUsersThunk: getUsersThunkCreator,
  addDialog: addDialogActionCreator,
})(withAuthRedirectUsers);
