import { TasksAction, TaskState, UPDATE_TASK, SET_TO_EDIT, ADD_TASK, Tasks, GET_LIST_TASKS, DELETE_TASK, TOGGLE_TASK } from './../types';

const initialState: TaskState = {
    tasks: [],
    taskIdToDelete: '',
    taskById: '',
    taskToEdit: {
        id: '',
        message: ''
    }
}

const getTasksFromLS = ():Tasks => {
    if (localStorage.getItem('tasks_list')) {
        return JSON.parse(localStorage.getItem('tasks_list') || '{}')
    }
    return {};
}

const saveTaskToLS = (tasks: Tasks) => {
    localStorage.setItem('tasks_list', JSON.stringify(tasks))
}

export const listReducer = (state = initialState, action: TasksAction) => {
    const listTasks = getTasksFromLS();

    switch (action.type) {
        case ADD_TASK:
            const clonedTasks = {...listTasks}
            clonedTasks[action.payload.id] = action.payload
            saveTaskToLS(clonedTasks)
            return{
                ...state,
                tasks: clonedTasks
            }
        case GET_LIST_TASKS:
            return{
                ...state,
                tasks: listTasks
            }
        case SET_TO_EDIT:
            return{
                ...state,
                taskToEdit: action.payload
            }
        case UPDATE_TASK:
            //
            const clone = {...listTasks}
            clone[action.payload.id].name = action.payload.name
            clone[action.payload.id].date = new Date().toLocaleTimeString().slice(0,-3)
            saveTaskToLS(clone)
            return{
                ...state,
                tasks: clone
            }
        case DELETE_TASK:
            
            const clonedTasks2 = {...listTasks}
            debugger
            delete clonedTasks2[action.payload]
            saveTaskToLS(clonedTasks2)
            return{
                ...state,
                tasks: clonedTasks2
            }
        case TOGGLE_TASK:
            debugger
            const clonedTasks3 = {...listTasks}
            let obj = clonedTasks3[action.payload]

            if (obj.completed) {
                obj.completed = false
            }else{
                obj.completed = true
            }
            saveTaskToLS(clonedTasks3)
            return{
                ...state,
                tasks: clonedTasks3
            }
            
            
        default:
            return state
    }
}