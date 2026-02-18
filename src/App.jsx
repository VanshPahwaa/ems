import { useContext, useState } from 'react'

import './App.css'
import Login from "./components/Auth/Login"
import AdminDashboard from './components/Dashboards/AdminDashboard'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {
  const { isLoggedIn, loggedInUser } = useContext(AuthContext);

  if (!isLoggedIn) return <Login />;

  return loggedInUser.role === "admin"
    ? <AdminDashboard />
    : <EmployeeDashboard />;
}


export default App;
