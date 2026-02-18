import React from 'react'

function CompletedTask({taskData}) {
  return (
   <div className="bg-blue-400 h-full p-6 flex-shrink-0 w-[300px] rounded-md flex flex-col justify-evenly">
      <div className="p-2 text-2xl font-bold">Completed Tasks</div>
      <div className='flex justify-between items-center'>
        <span className=" bg-red-500 rounded-sm px-2 py-1 "> {taskData.taskCategory}</span>
        <span> {taskData.taskAssignedDate}</span>
      </div>
      <h2 className='mt-3 text-xl'> {taskData.taskTitle}</h2>
      <p className='text-sm mt-1'> {taskData.taskDescription}</p>
    </div>
  )
}

export default CompletedTask
