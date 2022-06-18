import {combineReducers} from 'redux'
 import feedReducer from './feedReducer'
import profileReducer from './profileReducer'

const rootReducer =  combineReducers({
    feedReducer,
    profileReducer
})

export default rootReducer