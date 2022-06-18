import axios from 'axios'
import {GET_FEED,SET_LOADING} from './actiontypes'

export const getFeeds  = () => {
    return async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}photos/random?count=10`,{
                headers: {
                    'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
                }
            })
            setFeeds([...res.data])
            localStorage.setItem('newsFeed',JSON.stringify(res.data))
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
}

export const setFeeds = (payload) => {
    return (dispatch) => {
        dispatch({
            type: GET_FEED,
            payload
        })
    }
}

export const setLoading = (payload) => {
    return (dispatch) => {
        dispatch({
            type: SET_LOADING,
            payload
        })
    }
}