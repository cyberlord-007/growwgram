import {combineReducers} from 'redux'
 import feedReducer from './feedReducer'

const rootReducer =  combineReducers({
    feeds: feedReducer
})

export default rootReducer