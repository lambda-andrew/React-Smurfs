import React, { Component } from 'react';
import axios from 'axios';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const AppDiv = styled.div`
max-width: 1300px;
width: 100%;
margin: 0 auto;
font-family: 'Quicksand', sans-serif;
background-color:#88ccff;
`;

const NavDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 20px;
`;

const TitleH1 = styled.h1`
font-size: 60px;
margin: 0;
text-align: center;
color: white;
padding: 40px;
`;

const NavItem = styled.div`
padding: 10px;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  setSmurfs = newSmurfs => {
    this.setState({
      smurfs: newSmurfs
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({
          smurfs: response.data
        }))
      })
      .catch(error => {
        console.log("Server Error", error)
      })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <AppDiv>

        <TitleH1>Smurf Village</TitleH1>
        <NavDiv>
          <NavItem>
            <NavLink exact to='/' activeClassName='activeNavButton'> HOME </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/smurf-form' activeClassName='activeNavButton'> HATCH SMURF </NavLink>
          </NavItem>
        </NavDiv>

        <Route path='/smurf-form' render={(props) => <SmurfForm {...props} setSmurfs={this.setSmurfs} />} />
        <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs} />} />

      </AppDiv>
    );
  }
}

export default App;
