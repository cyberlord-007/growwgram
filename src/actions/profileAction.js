import {GET_USER_PROFILE} from './actiontypes'
import axios from 'axios'

export const getUserProfile = (userName) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}users/${userName}`,{
                headers: {
                    'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
                }
            })
            console.log(res.data)
            dispatch({
                type: GET_USER_PROFILE,
                payload: {...res.data}
            })
        } catch (err) {
            console.log(err)
        }
    }
}