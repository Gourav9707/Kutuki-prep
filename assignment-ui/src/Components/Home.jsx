import React from 'react'
import Drawer from './Drawer'
import Cookies from 'js-cookie'
import Authapi from './Authapi'

const Home = () => {

    const Auth=React.useContext(Authapi)

    const handleLogout=()=>{
        Cookies.remove('user')
        Auth.setAuth(false)
    }

    return (
        <div>
            <Drawer handleLogout={handleLogout}/>
        </div>
    )
}

export default Home
