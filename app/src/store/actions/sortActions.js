import axios from 'axios';

export const fetchResult = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_RESULT_START'});
        axios.get('https://www.potterapi.com/v1/sortingHat')
        .then(res => {
            console.log(res)
        })
        .catch(err=>{
            console.log("didn't fetch data", err)
        })
    }
}