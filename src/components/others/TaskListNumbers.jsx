import React from 'react'



function TaskListNumbers({loggedInUserData}) {
    

    return (
        <div className='flex justify-evenly items-center flex-nowrap gap-4 mt-8 '>

            <div className='min-h-32 w-[45%] bg-red-600 rounded-md px-9 py-4 '>
                <h1 className='text-5xl font-semibold '>{loggedInUserData.taskCount.failed}</h1>
                <h1 className='text-2xl font-medium'>failed Task</h1>
            </div>

            <div className='min-h-32 w-[45%] bg-green-400 rounded-md px-9 py-4 '>
                <h1 className='text-5xl font-semibold '>{loggedInUserData.taskCount.newTask}</h1>
                <h1 className='text-2xl font-medium'>New Task</h1>

            </div>
            <div className='min-h-32 w-[45%] bg-yellow-400 rounded-md px-9 py-4 '>
                <h1 className='text-5xl font-semibold '>{loggedInUserData.taskCount.active}</h1>
                <h1 className='text-2xl font-medium'>Active Task</h1>
            </div>
            <div className='min-h-32 w-[45%] bg-blue-400 rounded-md px-9 py-4 '>
                <h1 className='text-5xl font-semibold '>{loggedInUserData.taskCount.completed}</h1>
                <h1 className='text-2xl font-medium'>completed Task</h1>
            </div>
            <div className='min-h-32 w-[45%] bg-amber-800 rounded-md px-9 py-4 '>
                <h1 className='text-5xl font-semibold '>{loggedInUserData.taskCount.total}</h1>
                <h1 className='text-2xl font-medium'>Total Task</h1>

            </div>



        </div>
    )
}

export default TaskListNumbers
