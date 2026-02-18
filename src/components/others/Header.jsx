import React from 'react'

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function Header() {

    const {setLoggedInUser,setIsLoggedIn,loggedInUser}=useContext(AuthContext);
    function handleLogout(){
        localStorage.setItem("loggedInUser",null)
        setIsLoggedIn(false);
        setLoggedInUser(null);
    }


    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-medium'>
                Hlo <br /> <span className='text-3xl font-bold'>
                    {loggedInUser.firstName} 👋 
                    {/* Vansh */}
                </span>
            </h1>
            <button onClick={handleLogout} className='bg-red-500 px-4 py-2 rounded-sm text-lg font-bold '> Log out</button>
        </div>
    )
}

export default Header
