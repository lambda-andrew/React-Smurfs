import React from 'react';
import Styled from 'styled-components';

const Smurf = props => {
  return (
    <Card>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

const Card = Styled.div `
  width: 200px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 10px;
`

export default Smurf;

