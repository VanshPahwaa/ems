import React from 'react'

import CompletedTask from "../Tasks/CompletedTask"
import NewTask from "../Tasks/NewTasks"
import FailedTask from "../Tasks/FailedTasks"
import ActiveTask from "../Tasks/ActiveTask"

function TaskList({ loggedInUserData }) {

    return (
        <div id="tasklist" className='h-[50vh] flex font-medium justify-start flex-nowrap overflow-x-auto items-center gap-2 w-full mt-8 p-2'>
            {loggedInUserData.tasks.map((elem) => {
                if (elem.completed) {
                    return <CompletedTask taskData={elem} />
                }
                if (elem.newTask) {
                    return <NewTask taskData={elem} />
                }
                 if (elem.failed) {
                    return <FailedTask taskData={elem} />
                }
                if (elem.taskActive) {
                    return <ActiveTask taskData={elem} />
                }

            })}

        </div>
    )
}

export default TaskList
