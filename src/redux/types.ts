export const GET_LIST_TASKS = 'GET_LIST_TASKS';
export const GET_TASK_BY_ID = 'GET_TASK_BY_ID';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_TO_EDIT = 'SET_TO_EDIT';
export const UPDATE_TASK = 'UPDATE_TASK';

// this file is for interfaces and types
export interface Task{
    id: string,
    name: string,
    completed: boolean,
    date: string
}
export interface Tasks{
    [id: string]: Task
}

export interface TaskState{
    tasks: Task[],
    taskIdToDelete: string,
    taskById: string,
    taskToEdit: {
        id: string,
        message: string
    }
}
export interface NotificationState{
    message: string
}
//Actions

interface getAllTasks{
    type: typeof GET_LIST_TASKS,
}
interface toggleTask{
    type: typeof TOGGLE_TASK,
    payload: string
}
interface updateTask{
    type: typeof UPDATE_TASK,
    payload: {
        id: string,
        name: string
    }
}
interface setTaskEdit{
    type: typeof SET_TO_EDIT,
    payload: {id: string, name: string}
}

interface addTaskAction {
    type: typeof ADD_TASK,
    payload: Task
}

interface deleteTaskAction {
    type: typeof DELETE_TASK,
    payload: string
}

interface getTaskAction {
    type: typeof GET_TASK_BY_ID,
    payload: string
}

export interface setNotificationAction{
    type: typeof SET_NOTIFICATION,
    payload: string
    
}

export interface NotificationAction{
    type: typeof SET_NOTIFICATION,
    payload: string
}

export type TasksAction = getAllTasks | updateTask | setTaskEdit | addTaskAction | deleteTaskAction | getTaskAction | toggleTask;