import {GET_USER_PROFILE,PROFILE_ERROR} from '../actions/actiontypes'

const initState = {
    userData: {},
    isFetching: true,
    error: ''
}

const profileReducer = (state=initState,action) => {
    switch(action.type) {
        case GET_USER_PROFILE:
            return {...state,userData: action.payload,isFetching: false}
        case PROFILE_ERROR:
            return {...state,error: action.payload}
        default:
            return state
    }
}

export default profileReducer