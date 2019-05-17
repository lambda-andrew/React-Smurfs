import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

import img from '../smurfs.jpg'

const SmurfFormDiv = styled.div`
img{
  border-radius: 8px
  border: 2px solid black
}
form {
  margin-left: 75px;
  margin-top: 10px
}
input {
  width: 150px
  height: 30px
  margin-right: 5px
  text-align: end
}
button {
  width: 150px
  height: 30px
  font-family: 'Fredoka One', cursive;
  font-size: .75rem
}`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
      name: '',
      age: '',
      height: ''
      }
    };
  }

  addSmurf = (event) => {
    console.log(this.state.smurf)
    event.preventDefault();
    this.props.addSmurf(this.state.smurf)
  }

  handleInputChange = e => {
    this.setState({ smurf:{...this.state.smurf, [e.target.name]: e.target.value }});
  };

  render() {
    return (
      <SmurfFormDiv>
        <img src={img} alt="smurfs movie"/>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </SmurfFormDiv>
    );
  }
}

export default SmurfForm;
