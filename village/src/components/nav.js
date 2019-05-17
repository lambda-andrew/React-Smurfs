import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

class NavBar extends React.Component {
  render(){
    return (
      <header>
        <NavLink to="/smurfs">Home</NavLink>
        <NavLink to="/smurf-form">New Smurfs</NavLink>
      </header>
    )
  }
}

export default NavBar;
