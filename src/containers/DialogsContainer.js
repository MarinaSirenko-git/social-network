import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from '../components/Dialogs/Dialogs';
import AuthRedirect from '../hoc/AuthRedirect';
import { addDialogsThunkCreator } from '../redux/dialogsReducer';

const mapStateToProps = (state) => ({
  dialogsElements: state.chatPage.dialogs,
  messagesElements: state.chatPage.messages,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = () => ({
  addDialogsThunk: addDialogsThunkCreator,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect,
)(Dialogs);
