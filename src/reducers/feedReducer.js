import {GET_FEED} from '../actions/actiontypes'

const initState = {
    isLoading: true,
    feeds: []
}


const feedReducer = (state = initState,action) => {
    switch (action.type) {
        case GET_FEED:
            return {...state,feeds: [...state.feeds,action.payload]}
        default:
            return state
    }
}

export default feedReducer
