import { ADD_TASK, Task, Tasks, GET_LIST_TASKS, TasksAction, DELETE_TASK, TOGGLE_TASK, SET_TO_EDIT, UPDATE_TASK } from './../types';

export const addTask = (task: Task) : TasksAction => {
    debugger
    return{
        type: ADD_TASK,
        payload: task
    }
}
export const getTasks = () : TasksAction => {
    return{
        type: GET_LIST_TASKS,
    }
}
export const deleteTask = (id: string) : TasksAction => {
    return{
        type: DELETE_TASK,
        payload: id
    }
}
export const toggleTask = (id: string) : TasksAction => {
    return{
        type: TOGGLE_TASK,
        payload: id
    }
}
export const setTaskEdit = (id: string, name: string) : TasksAction => {
    debugger
    return{
        type: SET_TO_EDIT,
        payload: {
            id, name
        }
    }
}

export const updateTask = (id: string, name: string) : TasksAction => {
    debugger
    return{
        type: UPDATE_TASK,
        payload: {
            id, name
        }
    }
}