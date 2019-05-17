import React, { Component } from 'react';
import Smurf from './Smurf';
import styled from 'styled-components';

const Ul = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

class Smurfs extends Component {
  render() {
    return (
      <div className='Smurfs'>
        <Ul>
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
        </Ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
