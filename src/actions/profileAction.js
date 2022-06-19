import {GET_USER_PROFILE,FETCHING_PROFILE,PROFILE_ERROR} from './actiontypes'
import axios from 'axios'

export const getUserProfile = (userName) => {
    return async (dispatch) => {
        try {
            setProfileLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}users/${userName}`,{
                headers: {
                    'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
                }
            })
            const data = await res.data;
            console.log(res.data)
            dispatch({
                type: GET_USER_PROFILE,
                payload: {...data}
            })
        } catch (err) {
            console.log(err)
            dispatch({
                type: PROFILE_ERROR,
                payload: 'Problem fetching profile 😞'
            })
        }
    }
}

export const setProfileLoading = (payload) => {
    return (dispatch) => {
        dispatch({
            type: FETCHING_PROFILE,
            payload
        })
    }
}