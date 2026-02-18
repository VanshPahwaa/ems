import React, { useEffect, createContext, useState, useMemo } from 'react'

import { setLocalStorage, getLocalStorage } from '../utils/LocalStorage'
import Loading from '../components/others/Loading'

export const AuthContext = createContext()

function AuthProvider({ children }) {

    const [userData, setUserData] = useState(null)
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [loading,setIsLoading]=useState(true);
    const [loggedInUser,setLoggedInUser]=useState(null);

    useEffect(() => {
        if(!localStorage.getItem("users")){
            setLocalStorage()
        }
    const { users } = getLocalStorage();
    setUserData(users);
    }, []);

    useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('loggedInUser'));
    if(userData){
        setIsLoggedIn(true);
        setLoggedInUser(userData);
    }
    setIsLoading(false)
    },[])

    
    
    // 2nd option
    // if we refresh then all content refreshed 
    // const [update, setUpdate] = useState(true)
    // WITHOUT USEEFFECT AND USESTATE
    // useMemo(() => setLocalStorage(), [])

    // function updateLocalStorage(){
    //     const { employees, admin } = getLocalStorage()
    //     if(employees && admin){
    //         setUserData({employees,admin})
    //     }
    // }

    // function updateWeb() {
    //     console.log("updateWebfunction called")
    //     setUpdate((oldData) => {
    //         return !oldData
    //     })
    // }

    //  return (
    //     <AuthContext.Provider value={{employees,admin,updateWeb}}>
    //         {children}
    //     </AuthContext.Provider>
    // )

    if(loading){
        return <Loading/>;
    }

    return (
        <AuthContext.Provider value={{users:userData, setUserData,isLoggedIn,setIsLoggedIn,loggedInUser,setLoggedInUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
