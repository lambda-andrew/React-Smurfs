import React, { Component } from 'react';
import Axios from 'axios';

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

  addSmurf = () => {
  Axios.post('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res.data, "This is updated data!")
    this.setState({
      smurfs: res.data
    })
  })
  .catch(err => {
    console.log(err, "Gargamel got the updated village!")
  })
  }

  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
