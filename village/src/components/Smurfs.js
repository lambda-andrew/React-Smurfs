import React, { Component } from 'react';
import Styled from 'styled-components';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ContentWrap>
        
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
        
        </ContentWrap>
      </div>
    );
  }
}

const ContentWrap = Styled.ul `
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
`

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
