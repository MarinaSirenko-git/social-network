import { connect } from 'react-redux';
import axios from 'axios';
import React, { useEffect } from 'react';
import Profile from '../components/Profile/Profile';
import { setUserProfileActionCreator } from '../redux/profileReducer.js'
import { withRouter } from 'react-router-dom';

function ProfileContainer({setUserProfile, userProfile, match}) {
  useEffect(() => {
    const userId = !match.params.userId ? 18923 : match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then((res) => setUserProfile(res.data))
    .catch((e) => console.log(e))
  }, [match.params.userId, setUserProfile])


    return (<Profile profileUserData={userProfile} />)

}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  }
}

const withUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileActionCreator,
})(withUrlDataProfileContainer);