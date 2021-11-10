import React, { FC, FormEvent, useState } from 'react';
import { Task } from '../../redux/types'
import { useDispatch } from 'react-redux';
import {setTaskEdit, updateTask} from './../../redux/actions/listActions';
import Alert from '../Alert/Alert';

interface EditTaskProps {
    task: Task
}

const EditTask: FC<EditTaskProps> = ({task}) => {
  
    const dispatch = useDispatch();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        debugger
        e.preventDefault();
        if (taskName.trim() === '') {
            return <Alert message='Task name is required'/>
        }
        if (taskName.trim() == task.name) {
            return <Alert message='The same task aleardy exist'/>
        }
        dispatch(updateTask(task.id, taskName.trim()))
        dispatch(setTaskEdit(`list-${new Date().getTime()}`, ''))
    }
    const [taskName, setTaskName] = useState(task.name)


    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setTaskName(e.currentTarget.value)
    }

    const hideModalHandler = () => {
        dispatch(setTaskEdit(`list-${new Date().getTime()}`, ''))
    }
    return (
  
        <form onSubmit={submitHandler}>
        <header >
          <p >Edit List</p>
        </header>
          <div >
            <label className="label">List Name</label>
            <div className="control">
              <input 
                type="text"
                className="input"
                name="listName"
                placeholder="List Name"
                value={taskName}
                onChange={changeHandler}  
              />
            </div>
        </div>
        <footer >
          <button type="submit" >Save changes</button>
          <button type="button" className="btn" onClick={hideModalHandler}>Cancel</button>
        </footer>
      </form>

    )
}

export default EditTask
