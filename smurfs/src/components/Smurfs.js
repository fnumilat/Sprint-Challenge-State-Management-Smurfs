import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurf } from '../store/actions/Actions';

const Smurfs = ({ getSmurf, smurfs, isFetching, error}) => {
    useEffect(() => {
        getSmurf();
    }, []);

    if (isFetching) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return(
        <div className="Smurf-Cards-Box">
        {smurfs.map((smurf) => {
          return <div className="Smurf-Card" key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
          </div>
        })}
        </div>
    )
};


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};


export default connect(mapStateToProps, {getSmurf}) (Smurfs);