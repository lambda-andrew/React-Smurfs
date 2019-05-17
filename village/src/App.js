import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

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
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    this.fetchSmurfs()

  }

  fetchSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        this.setState({
          message: "Data fetching failed!"
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavLink to="/" exact activeClassName="active">Home</NavLink> |
          <NavLink to="/smurf-form" activeClassName="active">Form</NavLink>
        </div>

        <Route path="/" exact render={() =>
          <Smurfs smurfs={this.state.smurfs} />
        }>
        </Route>
        <Route path="/smurf-form" render={() =>
          <SmurfForm refreshData={this.fetchSmurfs} />
        }>
        </Route>
      </div>
    );
  }
}

export default App;
