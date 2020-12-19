import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({auth,component: Component, ...rest }) => {
    return(
      <Route 
      {...rest} 
      render={props=>
      (auth?(
        <Component {...props}/>
      ):
      (
        <Redirect to='/'/>
      ))
      }
     />
    )
  }
  const PrivateLogin = ({auth,component: Component, ...rest }) => {
    return(
      <Route 
      {...rest} 
      render={props=>
      (!auth?(
        <Component {...props}/>
      ):
      (
        <Redirect to='/home'/>
      ))
      }
     />
    )
  }

  export {PrivateRoute,PrivateLogin}