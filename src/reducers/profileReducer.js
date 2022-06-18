import {GET_USER_PROFILE} from '../actions/actiontypes'

const initState = {
    userData: {}
}

const profileReducer = (state=initState,action) => {
    switch(action.type) {
        case GET_USER_PROFILE:
            return {...state,userData: action.payload}
        default:
            return state
    }
}

export default profileReducer