
import Headers from "../others/Header"
import TaskCreation from '../others/TaskCreation'
import AllTask from "../others/AllTask"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

function AdminDashboard() {
const {setLoggedInUser,loggedInUser}=useContext(AuthContext);
  return (
    <div className='p-3 h-screen w-full'>
      <Headers setUser={setLoggedInUser}  loggedInUserData={loggedInUser}/>
      <TaskCreation/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
