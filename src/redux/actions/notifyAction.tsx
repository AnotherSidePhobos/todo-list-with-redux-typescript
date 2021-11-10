import {setNotificationAction, SET_NOTIFICATION } from "../types";


export const setNotification = (message: string): setNotificationAction => {
    return{
        type: SET_NOTIFICATION,
        payload: message
    }
}