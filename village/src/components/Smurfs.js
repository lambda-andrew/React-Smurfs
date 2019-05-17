import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

import img from '../smurfs-cartoon.jpg'

const SmurfsDiv = styled.div`
display: flex
flex-direction: column
align-items: center
img {
  border-radius: 8px
  border: 2px solid black
}
h1{
  font-family: 'Fredoka One', cursive;
}`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfsDiv>
        <img src={img} alt ="cartoon smurfs"/>
        <h1>Smurf Village</h1>
        
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        
      </SmurfsDiv>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
