import {SET_ALERT, REMOVE_ALERT} from '../types'


    const githubReducer = (state, action) => {
        switch(action.type) {
            case SET_ALERT: 
            return{
                ...state,
                alert: action.payload,
            }
            case REMOVE_ALERT:
                return{
                    ...state,
                    alert: null
                }
            default: 
            return state;
        }
    }

export default githubReducer 