import React, {useState} from 'react'
import { ModalElement } from './Modal'
import { NewTask } from './NewTask'

export const SeccionTask = ({ task, setTarea, tarea }) => {
    const [visible, setVisible] = useState(false)

    const checkTarea = (check) => {
        const findTask = tarea.find(item => item.id === task.id)
        findTask.complete = check

        const filterTask = tarea.filter(item => item.id !== task.id)
        filterTask.push(findTask)

        setTarea(filterTask)
    }

    const deleteTask = () => {
        const filterTask = tarea.filter(item => item.id !== task.id)
        setTarea(filterTask)
    }

    return (
        <>
            <div className="flex p-2 seccionTask">
                <input type='checkbox' className="p-1" onChange={event => checkTarea(event.target.checked)} defaultChecked={task.complete} />
                <span className="P-1 ml-2" onClick={() => setVisible(true)}> {task.task}</span>
                <span className="text-danger p-1 ml-2 float-right" onClick={deleteTask}>Eliminar</span>
            </div>

            <ModalElement open={visible} setOpen={setVisible}>
                <NewTask setOpen={setVisible} setTarea={setTarea} tarea={tarea} title={task.task} />
            </ModalElement>
        </>
    )
}