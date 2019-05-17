import React, { Component } from 'react';
import Axios from 'axios';
import {Route, NavLink} from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null,
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
  Axios.get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res.data, "This is inital data!")
    this.setState({
      smurfs: res.data
    })
  })
  .catch(err => {
    console.log(err, "Gargamel got the initial village!")
  })
  }

  addSmurf = (smurf) => {
  Axios.post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    console.log(res.data, "This is updated data!")
    this.setState({
      smurfs: res.data,
    })
    this.props.history.push("/smurfs")
  })
  .catch(err => {
    console.log(err, "Gargamel got the updated village!")
  })
  }

  populateForm = smurf => {
    this.setState({
      activeSmurf: smurf
    })
    this.props.history.push("/smurf-form")
  }

  updateSmurf = smurf => {
    Axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      this.setState({
        activeSmurf: null,
        smurfs: res.data,
      })
      this.props.history.push("/smurfs")
    })
    .catch(err => console.log(err, "Papa Smurf is always right!"))
  }

  deleteSmurf = (id) => {
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res.data, "Don't just look at me, call Papa Smurf!")
      this.setState({
        smurfs: res.data,
      })
      this.props.history.push("/smurfs")
    })
    .catch(err => {
      console.log(err, "False alarm everybody! Go back to your Smurf duties!")
      this.setState({
      })
    })
  }

  render() {
    return (
      <div>
        <div className="homelinks">
          <h1>Smurf Village</h1>
          <nav className="navs">
            <NavLink exact to="/" activeClassName="active">Home</NavLink><br></br>
            <NavLink to ="/smurfs" activeClassName="active">List of Smurfs</NavLink><br></br>
            <NavLink to ="/smurf-form" activeClassName="active">Add A Smurf!</NavLink>
          </nav>
        </div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/smurfs" render={props => (<Smurfs {...props} smurfs={this.state.smurfs}/>) }/>
        <Route path="/smurf-form" render={props => (<SmurfForm {...props} addSmurf={this.addSmurf} activeSmurf={this.state.activeSmurf} updateSmurf={this.updateSmurf}/>) }/>
        <Route path="/smurfs/:id" render={props =>(<Smurf {...props} items={this.state.smurfs} deleteSmurf={this.deleteSmurf} populateForm={this.populateForm}/>) }/>
      </div>
    );
  }
}

export default App;
