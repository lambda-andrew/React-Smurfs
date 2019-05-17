import React from 'react';
import {NavLink} from 'react-router-dom';
import Styled from 'styled-components';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/smurf-form"><Button>Add A Smurf</Button></NavLink>
            <NavLink to="/"><Button>Smurf List</Button></NavLink>
        </div>
    )
}

const Button = Styled.button `
    font-size: 1.2rem;
    border-radius: 4px;
    margin: 100px 5px 0 5px;
    cursor: pointer;
    :focus {
        outline: none;
    }
`

export default Navigation;