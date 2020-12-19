import './App.css';
import {Switch, BrowserRouter} from "react-router-dom";
import Home from './screens/Home'
import Authapi from './hooks/Authapi'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import Login from './screens/Login'
import {PrivateRoute,PrivateLogin} from './routes'

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


export default App;
