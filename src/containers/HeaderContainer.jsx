import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Header from '../components/Header/Header.jsx';
import { tokenCheckThunkCreator } from '../redux/authReducer.js';

function HeaderContainer(props) {

  useEffect(() => {
    props.tokenCheckThunk()
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
  tokenCheckThunk: tokenCheckThunkCreator,
})(HeaderContainer);