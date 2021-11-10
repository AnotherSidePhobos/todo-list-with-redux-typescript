import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {setNotification} from './../../redux/actions/notifyAction';

interface AlertProps {
    message: string
}

const Alert: FC<AlertProps> = ({message}) => {


    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setNotification(''))
        }, 3000)
        // alert will disappear in 3 second

    }, [dispatch, message])

    return (
        <div style={{textAlign: 'center'}}>
            <div className="alert alert-danger alert-block" role="alert">
                {message}
            </div>
        </div>
    )
}

export default Alert
