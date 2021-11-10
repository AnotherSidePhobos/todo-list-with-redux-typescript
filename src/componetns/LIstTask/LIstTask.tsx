import React, {FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, deleteTask, toggleTask, setTaskEdit } from './../../redux/actions/listActions';
import { Task } from '../../redux/types';
import {RootState} from './../../redux/store';
import { TiDelete } from 'react-icons/ti';
import './LIstTask.css';

const LIstTask: FC = () => {

    const {tasks, taskToEdit} = useSelector((state: RootState) => state.list);
    const dispatch = useDispatch();


    const clickDeleteHandler = (id: string) => {
        dispatch(deleteTask(id))
    }
    const clickCheckboxHandler = (id: string) => {
        dispatch(toggleTask(id))
    }

    const editClickHandler = (id: string, name: string) => {
        dispatch(setTaskEdit(id, name))
    }

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    return (
        <>
                <div>
                
                    {Object.keys(tasks).length === 0 ?

                    <h3 className='no__todos'> No todos yet </h3> 
                        :
                        <table className='table' cellPadding={10}>
                        <thead>
                            <tr>
                                <td>isDone?</td>
                                <td>ToDo</td>
                                <td>Time</td>
                                <td>Close</td>
                            </tr>
                        </thead>
                        {
                            Object.values(tasks).map((task: any) => (
                        <tbody>
                                <tr>
                                    <td scope="row">
                                        <div className="input-group-text check">
                                            <input type="checkbox" onClick={() => clickCheckboxHandler(task.id)} aria-label="Checkbox for following text input"/>
                                        </div>
                                    </td>
                                    <td>
                                        <p className={task.completed == false ? "task" : "task closed"} onClick={() => editClickHandler(task.id, task.name)} >{task.name}</p>
                                    </td>
                                    <td>
                                        <div>{task.date}</div>
                                    </td>
                                    <td>
                                        <div className='delete' onClick={() => clickDeleteHandler(task.id)}><TiDelete/></div>
                                    </td>
                                </tr>
                        </tbody>
                            ))
                        }
                    </table>
                    }
                    </div>
        </>
    )
}

export default LIstTask
