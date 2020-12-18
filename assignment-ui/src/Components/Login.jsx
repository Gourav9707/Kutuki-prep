import React from 'react'
import firebase from '../firebase'
import * as firebaseui from "firebaseui"
import {useEffect} from 'react'
import Authapi from './Authapi';
import Cookies from 'js-cookie'

const Login = (props) => {
  const Auth=React.useContext(Authapi)    

    useEffect(() => {
        const uiConfig = {
          signInFlow: 'popup',
          signInSuccessUrl: '/',
                
          signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                // The default selected country.
                defaultCountry: 'IN'
            }
          ],

          callbacks: {
            signInSuccess: function(){
              console.log('worked')
              Cookies.set('user', 'logintrue')
              Auth.setAuth(true)
            },  
          }
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container", uiConfig);
      }, [])
      return (
        <>
          <div id="firebaseui-auth-container" country={"in"}></div>
        </>
      );
    }

    export default Login