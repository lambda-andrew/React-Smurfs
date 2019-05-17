import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom';

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
      <div className="App">
        <NavLink exact to='/' activeClassName='activeNavButton'>HOME</NavLink>
        <NavLink to= '/smurf-form' activeClassName='activeNavButton'> HATCH SMURF </NavLink>

      
        <Route path='/smurf-form' render={(props) => <SmurfForm {...props} setSmurfs={this.setSmurfs} />} />
        <Route exact path='/' render={() => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
