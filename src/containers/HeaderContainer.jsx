import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Header from '../components/Header/Header.jsx';
import { setAuthDataActionCreator } from '../redux/authReducer.js';
import { tokenCheck } from '../utils/api.js';

function HeaderContainer(props) {

  useEffect(() => {
    tokenCheck()
      .then((data) => {
        if(data.resultCode === 0) {
          props.setAuthData(data.data);
        }
      })
      .catch((e) => console.log(e))
  }, [props])

  return (<Header {...props} />)

}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userName: state.auth.login,
  }
}

export default connect(mapStateToProps, {
  setAuthData: setAuthDataActionCreator,
})(HeaderContainer);