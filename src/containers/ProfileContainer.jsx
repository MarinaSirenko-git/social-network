import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from '../components/Profile/Profile';
import { getUserDataThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../redux/profileReducer';
import AuthRedirect from '../hoc/AuthRedirect';

function ProfileContainer({
  getUserDataThunk, getUserStatusThunk, updateUserStatusThunk, userProfile, userStatus, match,
}) {
  useEffect(() => {
    const userId = !match.params.userId ? 18923 : match.params.userId;
    getUserDataThunk(userId);
    getUserStatusThunk(userId);
  }, [getUserDataThunk, getUserStatusThunk, match.params.userId, userStatus]);

  return (
    <Profile
      profileUserData={userProfile}
      userStatus={userStatus}
      updateUserStatus={updateUserStatusThunk}
    />
  );
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  userStatus: state.profilePage.userStatus,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getUserDataThunk: getUserDataThunkCreator,
    getUserStatusThunk: getUserStatusThunkCreator,
    updateUserStatusThunk: updateUserStatusThunkCreator,
  }),
  withRouter,
  AuthRedirect,
)(ProfileContainer);
