import React from 'react'
import Layout from '../components/Layout'
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
            <Layout handleLogout={handleLogout}/>
        </div>
    )
}

export default Home
