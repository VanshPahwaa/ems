import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

import { setLocalStorage } from '../../utils/LocalStorage'



function TaskCreation() {
const {setUserData} = useContext(AuthContext)
    const initialState={
        TaskTitle: "",
        Date: "",
        employeename: "",
        Category: "",
        Description: ""
    }

    const [taskForm, setTaskForm] = useState(initialState)

    function handleTaskForm(e) {
        setTaskForm((oldData) => {
            return { ...oldData, [e.target.name]: e.target.value }
        })
    }

    function handleTaskCreation(e) {
        e.preventDefault();
      for (let fieldName in taskForm) {
  if (!taskForm[fieldName].trim()) {
    alert(`${fieldName} cannot be empty`);
    return
  }
}

        const employeesData = JSON.parse(localStorage.getItem("users"))
        let isEmployeesUpdated = false;
        employeesData.forEach((elem) => {
            if (elem.firstName.toLowerCase() == taskForm.employeename.toLowerCase()) {
                console.log(elem.tasks)
                elem.tasks.push({ newTask: true, failed: false, completed: false, taskActive: true, taskAssignedDate: taskForm.Date, taskCategory: taskForm.Category, taskDescription: taskForm.Description, taskTitle: taskForm.TaskTitle })
                elem.taskCount.newTask += 1,
                elem.taskCount.total+=1
                isEmployeesUpdated = true
            }
        })
        if (isEmployeesUpdated) {
            setLocalStorage(employeesData);
            setUserData(  employeesDat)
            setTaskForm({})
            alert("Task Created")
        } else {
            alert("Employee Not Founded")
        }

        // contextData.updateWeb()
    }

    return (
        <div className='w-full h-auto p-3 bg-emerald-900 rounded-md mt-4'>
            <form className='text-md font-normal flex flex-row gap-2 justify-evenly' onSubmit={handleTaskCreation}>
                <div className='w-[50%]'>
                    <div className='w-full mt-2'>
                        <label htmlFor='Task Title' className=''>Title</label><br />
                        <input onChange={handleTaskForm} value={taskForm.TaskTitle ? taskForm.TaskTitle : ""} type='text' placeholder="Make a UI Design" name="TaskTitle" id="TaskTitle"
                            className=' mt-1 placeholder:font-medium   border-2 px-2 py-1 border-emerald-400 rounded w-full focus-within:outline-0' />
                    </div>
                    <div className='w-full mt-2'>
                        <label for="Date" className=''>Assigned For</label><br />
                        <input onChange={handleTaskForm} value={taskForm.Date ? taskForm.Date : ""} type='Date' name="Date" id="Date"
                            className='mt-1 placeholder:font-medium border-2 px-2 py-1 border-emerald-400 rounded w-full focus-within:outline-0' />
                    </div>

                    <div className='w-full mt-2'>

                        <label for="name" className=''>Asign to</label><br />
                        <input onChange={handleTaskForm} value={taskForm.employeename ? taskForm.employeename : ""} type='text' placeholder="employee name" name="employeename" id="employeename"
                            className='mt-1 placeholder:font-medium   border-2 px-2 py-1 border-emerald-400 rounded w-full focus-within:outline-0' />
                    </div>
                    <div className='w-full mt-2'>

                        <label for="Category" className=''>Category</label><br />
                        <input onChange={handleTaskForm} value={taskForm.Category ? taskForm.Category : ""} type='text' placeholder="design, dev, etc" name="Category" id="Category"
                            className='mt-1 placeholder:font-medium   border-2 px-2 py-1 border-emerald-400 rounded w-full focus-within:outline-0' />
                    </div>
                </div>
                <div className='w-[50%] mt-2'>
                    <label for="Description" className=''>Description</label><br />
                    <textarea onChange={handleTaskForm} value={taskForm.Description ? taskForm.Description : ""} rows={8} placeholder="design, dev, etc" name="Description" id="Description"
                        className='mt-1 w-full placeholder:font-medium   border-2 px-2 py-1 border-emerald-400 rounded focus-within:outline-0' />
                    <button className='bg-orange-400 w-full rounded-md px-2 py-1 hover:opacity-85 my-2'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default TaskCreation
