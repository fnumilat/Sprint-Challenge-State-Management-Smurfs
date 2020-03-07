import axios from 'axios';

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START});

    axios 
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("Data Received Succesfully!", res);
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log("Data Recieving Error!!", err);
        dispatch({type: FETCHING_SMURF_FAILURE, payload: err.response})
    });
};

export const SUBMITTING_SMURF_START = "SUBMITTING_SMURF_START"
export const SUBMITTING_SMURF_SUCCESS = "SUBMITTING_SMURF_SUCCESS"
export const SUBMITTING_SMURF_FAILURE = "SUBMITTING_SMURF_FAILURE"

export const submittingSmurf = (newSmurf) => dispatch => {
    dispatch({type: SUBMITTING_SMURF_START});

    axios 
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
        console.log("Successful Submitted!", res);
        dispatch({type: SUBMITTING_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log("Error Submitting!!", err);
        dispatch({type: SUBMITTING_SMURF_FAILURE, payload: err.response})
    });
};