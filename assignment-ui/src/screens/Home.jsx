import React from 'react'
import Header from '../components/Header'
import Cookies from 'js-cookie'
import Authapi from '../hooks/Authapi'

const Home = () => {

    const Auth=React.useContext(Authapi)

    const handleLogout=()=>{
        Cookies.remove('user')
        Auth.setAuth(false)
    }

    return (
        <div>
            <Header handleLogout={handleLogout}/>
        </div>
    )
}

export default Home
