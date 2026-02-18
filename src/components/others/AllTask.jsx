import React, { useContext } from 'react'

import { AuthContext } from '../../context/AuthProvider'



function AllTask() {
    const {users} = useContext(AuthContext)
    console.log(users)

    return (
        <div className=' font-medium bg-emerald-900 flex flex-col gap-2 p-3 mt-3 rounded-sm '>
            <div className='flex justify-between border-2 font-bold border-blue-400 w-full rounded-sm px-3 py-1 text-xl sm:text-2xl '>
                <div className='flex-1 text-center'><p>Name</p></div>
                <span className='block text-center flex-1'>New </span>
                <span className='block text-center flex-1'>Failed </span>
                <span className='block text-center flex-1'>Active </span>
                <span className='block text-center flex-1'>Completed</span>
                <span className='block text-center flex-1'>Total </span>
            </div>


            {users &&
                users?.map((elem) => {
                    console.log(elem)
                    if(elem.role=="admin"){
                        return;
                    }
                    return <div className='flex justify-between border-2 border-blue-400 w-full rounded-sm px-3 py-1 text-xl'>
                        <div className='flex-1 text-center'><p> {elem.firstName}</p></div>
                        <span className='block text-center flex-1'>{elem.taskCount.newTask}</span>
                        <span className='block text-center flex-1'>{elem.taskCount.failed}</span>
                        <span className='block text-center flex-1'>{elem.taskCount.active}</span>
                        <span className='block text-center flex-1'>{elem.taskCount.completed}</span>
                        <span className='block text-center flex-1'>{elem.taskCount.total}</span>

                    </div>
                })}
        </div>
    )
}

export default AllTask
