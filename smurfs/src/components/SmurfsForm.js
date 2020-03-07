import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { submittingSmurf } from '../store/actions/Actions';

const SmurfsForm = ({ submittingSmurf, smurfs, isSubmitting, error}) => {
    const [newSmurf, setNewSmurf] = useState({name: "", age: "", height: ""});

    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
        console.log("handleCharnges:", e.target.name, e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        submittingSmurf(newSmurf);
        setNewSmurf({name: "", age: "", height: ""});
    };

    return(
        <div>
            <form className="Form" onSubmit={handleSubmit}>
                <input
                    className="Form-Input"
                    type="text" 
                    name="name"
                    placeholder="Enter the name"
                    onChange={handleChanges}
                    value={newSmurf.name}
                />
                <input
                    className="Form-Input"
                    type="text" 
                    name="age"
                    placeholder="Enter the age"
                    onChange={handleChanges}
                    value={newSmurf.age}
                />
                <input
                    className="Form-Input"
                    type="text" 
                    name="height"
                    placeholder="Enter the height"
                    onChange={handleChanges}
                    value={newSmurf.height}
                />
                <button className="Form-Button" type="submit">Add a new Smurf</button>
            </form>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isSubmitting: state.isSubmitting,
        error: state.error
    };
};


export default connect(mapStateToProps, {submittingSmurf}) (SmurfsForm);