import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { loginThunkCreator } from '../redux/authReducer';
// eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }]
// const mapDispatchToProps = () => {
//   return {
//     loginThunkCreator,
//   };
// };

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { loginThunkCreator })(Login);
