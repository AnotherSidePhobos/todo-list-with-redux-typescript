import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux';
import LIstTask from '../../componetns/LIstTask/LIstTask';
import { Task } from '../../redux/types';
import CreateNewTask from './../../componetns/CreateNewTask/CreateNewTask';
import './Home.css';
import {RootState} from './../../redux/store';
import EditTask from './../../componetns/EditTask/EditTask';
const Home: FC = () => {

   
    const {taskToEdit} = useSelector((state: RootState) => state.list)
    let taskName = taskToEdit['name'] || '';
    
    return (
        <div className='container'>
            <h2>Make new task</h2>
            <div>
                <CreateNewTask/>
            </div>
            <div>
                <LIstTask/>
            </div>
            {taskName && <EditTask task={taskToEdit}/>}
        </div>
    )
}

export default Home
