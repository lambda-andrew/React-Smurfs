import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/smurf-form">Add A Smurf</NavLink>
            <NavLink to="/">Smurf List</NavLink>
        </div>
    )
}

export default Navigation;