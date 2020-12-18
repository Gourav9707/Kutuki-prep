import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from './Components/Home'
import Authapi from './Components/Authapi'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import Login from './Components/Login'

function App() {

  const [auth,setAuth]=useState(false)

  const readCookies=()=>{
    let user=Cookies.get('user')
    if(user){
      setAuth(true)
    }
  }

  useEffect(() => {
    readCookies()
  }, [])


  return (
    <div className="App">
      {/* <Route  path='/' component={Login} exact/> */}
      <Authapi.Provider value={{auth,setAuth}}>
      <BrowserRouter>
        <Switch>
          <PrivateLogin  exact path='/' auth={auth} component={Login}/>    
          <PrivateRoute  exact path='/home' auth={auth} component={Home}/>   
        </Switch>
      </BrowserRouter>
      </Authapi.Provider>
    </div>
  );
}

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


export default App;
