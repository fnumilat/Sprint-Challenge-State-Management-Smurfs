import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, SUBMITTING_SMURF_START, SUBMITTING_SMURF_SUCCESS} from '../actions/Actions';

const initialState = {
    isFetching: false,
    error: "",
    smurfs: [],
    isSubmitting: false
};


export const Reducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_START :
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_SMURF_SUCCESS :
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            };
        case SUBMITTING_SMURF_START :
            return {
                ...state,
                isSubmitting: true,
                error: ""
            };
        case SUBMITTING_SMURF_SUCCESS :
            return {
                ...state,
                isSubmitting: false,
                smurfs: action.payload
            };
        default:
            return state;
    };
};