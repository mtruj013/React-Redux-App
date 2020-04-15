import axios from 'axios';

export const fetchResult = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_RESULT_START'});
        axios.get('https://www.potterapi.com/v1/sortingHat')
        .then(res => {
            console.log(res)
            dispatch({ type: 'FETCH_RESULT_SUCCESS', payload: res.data})
        })
        .catch(err=>{
            // console.log("didn't fetch data", err)
            dispatch({
                type: 'FETCH_RESULT_FAILURE', 
                payload: `Error ${err.response.status} : ${err.response.data}`
            })
        })
    }
}