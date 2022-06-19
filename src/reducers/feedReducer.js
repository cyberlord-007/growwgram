import {GET_FEED,SET_LOADING,SET_ERROR} from '../actions/actiontypes'

const initState = {
    isLoading: true,
    feeds: [],
    error: ''
}


const feedReducer = (state = initState,action) => {
    switch (action.type) {
        case GET_FEED:
            return {...state,feeds: [...new Set([...state.feeds,...action.payload])],isLoading: false}
        case SET_LOADING:
            return {...state,isLoading: action.payload}
        case SET_ERROR:
            return {...state,error: action.payload}
        default:
            return state
    }
}

export default feedReducer
