import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfsDiv = styled.div`
display: flex
flex-direction: column
align-items: center
h1{
  font-family: 'Fredoka One', cursive;
}`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfsDiv>
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
