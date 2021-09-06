import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer'
import {SET_ALERT, REMOVE_ALERT} from '../types'

const AlertState = (props) => {
const initialState = {
    alert: null
}
const [state, dispatch] = useReducer(alertReducer, initialState)

//Set Alert
const showAlert = (message, color) => {
    dispatch({
        type: SET_ALERT,
        payload: {
            message,
            color
        }
    })
    setTimeout(() => dispatch({
        type: REMOVE_ALERT
    }), 3000)
  }

  return (
      <alertContext.Provider value={{
          alert: state.alert,
          showAlert
      }}>
          {props.children}
      </alertContext.Provider>
  )
}

export default AlertState