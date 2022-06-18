import axios from 'axios'

export const getFeeds  = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}photos/random?count=10`,{
                headers: {
                    'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
                }
            })
            dispatch({
                type: 'GET_FEED',
                payload: res.data
            })
            localStorage.setItem('newsFeed',JSON.stringify(res.data))
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
}