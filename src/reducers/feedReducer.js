import {GET_FEED,SET_LOADING} from '../actions/actiontypes'

const initState = {
    isLoading: false,
    feeds: []
}


const feedReducer = (state = initState,action) => {
    switch (action.type) {
        case GET_FEED:
            return {...state,feeds: [...state.feeds,...action.payload]}
        case SET_LOADING:
            return {...state,isLoading: action.payload}
        default:
            return state
    }
}

export default feedReducer
