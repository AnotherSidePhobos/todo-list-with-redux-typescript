import React, { FC, useState, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LIstTask from '../../componetns/LIstTask/LIstTask';
import { Task } from '../../redux/types';
import Alert from './../Alert/Alert';
import {addTask} from './../../redux/actions/listActions';
import {setNotification} from './../../redux/actions/notifyAction';
import { RootState } from '../../redux/store';

const CreateNewTask: FC = () => {
    
    const [TaskName, setTaskName] = useState('')

    const {tasks} = useSelector((state: RootState) => state.list);

    const compareWithAnyOther = (TaskName: string) => {
        let arr = Object.values(tasks);
        let element = arr.find((a: any) => a.name === TaskName)
        if (element) {
            dispatch(setNotification(`Task with name "${TaskName}" already exist`))
            setTaskName('')
            return false;
        }else{
            return true;
        }
    }

    const dispatch = useDispatch();
    
        const changeHandler = (e: FormEvent<HTMLInputElement>) => {
            setTaskName(e.currentTarget.value)
        }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (TaskName.trim() === '') {
            dispatch(setNotification('Field must not be empty'))
            return;
        }
        
        if (compareWithAnyOther(TaskName)) {
            const newTask: Task = {
                
                id: `list-${new Date().getTime()}`,
                name: TaskName,
                completed: false,
                date: new Date().toLocaleTimeString().slice(0,-3)
            }
            dispatch(addTask(newTask))
            setTaskName('')
        }  
    }
    return (
        <div style={{minWidth: '400px', width: '800px'}}>
            <form onSubmit={submitHandler}>
                <input type='text' value={TaskName} onChange={changeHandler} placeholder='type task here'/>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateNewTask
