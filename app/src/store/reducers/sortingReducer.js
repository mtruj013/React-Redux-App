export const initialState = {
    result: '',
    isLoading: false,
    error: '' 
}

export const sortingReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_RESULT_START':
            return{
                ...state,
                isLoading: true
            };
        case 'FETCH_RESULT_SUCCESS':
            return{
                ...state,
                isLoading: false,
                result: action.payload,
                error: ''
            };
        case 'FETCH_RESULT_FAILURE':
            return{
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}