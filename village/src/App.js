import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount = () => {
    this.allSmurfs();
  }

  allSmurfs = () => {
    axios
    .get("http://localhost:3333/smurfs")
    .then((smurfs) => {
      this.setState({ smurfs: smurfs.data })
    })
    .catch((error) =>{
      console.log('Looks like Gargamel took your smurf(s)!', error)
    })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />

        <Route path="/smurfs" render={props => {
          return (
            <div>
              <SmurfForm {...props} addSmurf={this.addSmurf} />
              <Smurfs {...props} smurfs={this.state.smurfs} />
            </div>
          )
        }} />

      </div>
    );
  }
}

export default App;
