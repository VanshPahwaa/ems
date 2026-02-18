import React, { useContext } from 'react'



import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from "../Tasks/TaskList"
import { AuthContext } from '../../context/AuthProvider'


function EmployeeDashboard() {
    const {loggedInUser}=useContext(AuthContext)

return (
        <div className='p-3'>
            <Header />
            <TaskListNumbers loggedInUserData={loggedInUser} />
            <TaskList loggedInUserData={loggedInUser}/>
        </div>
    )
}

export default EmployeeDashboard
