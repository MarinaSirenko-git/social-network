import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import { tokenCheckThunkCreator } from '../redux/authReducer';

function HeaderContainer(props) {
  useEffect(() => {
    props.tokenCheckThunk();
  }, [props]);

  return (<Header {...props} />);
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userName: state.auth.login,
});

export default connect(mapStateToProps, {
  tokenCheckThunk: tokenCheckThunkCreator,
})(HeaderContainer);
