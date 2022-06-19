import {GET_USER_PROFILE} from '../actions/actiontypes'

const initState = {
    userData: {},
    isFetching: true
}

const profileReducer = (state=initState,action) => {
    switch(action.type) {
        case GET_USER_PROFILE:
            return {...state,userData: action.payload,isFetching: false}
        default:
            return state
    }
}

export default profileReducer