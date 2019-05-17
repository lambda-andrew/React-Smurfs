import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/smurf-form'>Add A Smurf</NavLink>
        </nav>
        <Route exact path='/' render={props => ( <Smurfs {...props} smurfs={this.state.smurfs}/> )}/>
        <Route path='/smurf-form' component={SmurfForm} />
      </div>
      
    );
  }
}

export default App;
