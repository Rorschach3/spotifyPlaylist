import React from	'react'	
import { useAuth } from './context/AuthContext'	

const Dashboard = () =› {	
    const {authUser,	
        setAuthUser,	
        isLoggedIn,	
        setIsLoggedIn} = useAuth ()|	

        const login = (e)=> {
            e.preventDefault()
            setIsLoggedIn(true)
            setAuthUser({
                Name: 'John Doe',
            })
        }

        const logout = (e)=> {
            e.preventDefault()
            setIsLogged(false)
            setAuthUser(null)
                Name: Null,
        }

    return (	
        <>

            <span>User is currently: {isLoggedIn ? 'Logged-In' : 'Logged Out'}.</span>
            {isLoggedIn ? (<span>User name: {authUser.Name}</span>) : null}
            <br />
            {isLoggedIn
            ? <button onClick={(e)=>{logOut(e)}}>Logout</button>
        : <button onClick={(e)=>{logIn(e)}}></>>Login</button>}


        </>
    )	
}	


export default Dashboard	