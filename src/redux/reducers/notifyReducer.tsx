import { NotificationAction, NotificationState, SET_NOTIFICATION } from './../types';

const initialState: NotificationState = {
    message: ''
}

export const notificationReducer = (state = initialState, action: NotificationAction): NotificationState => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return{
                ...state,
                message: action.payload
            }
    
        default:
            return state;
    }
}

export default notificationReducer;