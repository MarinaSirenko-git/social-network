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
import { RootReducerStateType } from '../redux/reduxStore';

type MapStatePropsType = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  users: any,
  isFetching: any,
  isLoading: boolean,
  isAuth: boolean,
};

type MapDispatchPropsType = {
  getUsersThunk: (currentPage: number, pageSize: number) => void,
  setCurrentPage: (pageNumber: number) => void,
  unfollowUserThunk: any,
  followUserThunk: any,
  addDialog: any,
};

type Props = MapStatePropsType & MapDispatchPropsType;

type State = {
  onPageChanged: (pageNumber: number) => void,
};

class UsersContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged(pageNumber: number) {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        { this.props.isLoading ? <Preloader />
          : (
            <Users
              totalUsersCount={this.props.totalUsersCount}
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

const mapStateToProps = (state: RootReducerStateType): MapStatePropsType => ({
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
