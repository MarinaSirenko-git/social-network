import { Redirect } from "react-router-dom"

const AuthRedirect = (Component) => {
  function RedirectComponent(props) {
    if(!props.isAuth) return <Redirect to="/login"/>
    return <Component {...props} />
  }
  return RedirectComponent;
}

export default AuthRedirect;