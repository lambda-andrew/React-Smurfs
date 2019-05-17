import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

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
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log(err))
  }

  addNewSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log(err))
  }

  updateSmurf = (smurf, id) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div>
            <h1>Smurfs Village</h1>
          </div>
          <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/smurf-form'>Add New Smurf</NavLink>
          </div>
        </nav>
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} update={this.updateSmurf} delete={this.deleteSmurf}/> }/>
        <Route path='/smurf-form' render={props => <SmurfForm {...props} add={this.addNewSmurf}/> }/>
        {/* <Route path='/smurt/:id' render={props => <Smurf {...props} />}/> */}
      </div>
    );
  }
}

export default App;
