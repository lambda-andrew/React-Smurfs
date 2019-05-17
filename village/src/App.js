import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import axios from 'axios';

import './App.scss';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const AppDiv = styled.div`
  width: 1440px
  display: flex
  flex-direction: column
  align-items: center`;

const NavBar = styled.nav`
  margin: 20px 0
  a{
    text-decoration: none
    color: black
  }`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err.response))
  }

  addSmurf = (smurf) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <AppDiv>
        <NavBar>
          <NavLink to='/'>Home</NavLink>{' '}
          <NavLink to='/smurf-form'>Add A Smurf</NavLink>
        </NavBar>
        <Route exact path='/' render={props => ( <Smurfs {...props} smurfs={this.state.smurfs}/> )}/>
        <Route path='/smurf-form' render={props => ( <SmurfForm {...props} smurfs={this.state.smurfs} addSmurf={this.addSmurf}/> )} />
      </AppDiv>
      
    );
  }
}

export default App;
