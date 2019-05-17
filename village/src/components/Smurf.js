import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
border-radius: 8px
border: 2px solid black
padding: 0 15px;
h3 {
  font-family: 'Fredoka One', cursive;
}
strong {
  font-family: 'Open Sans', sans-serif;
}
p{
  font-family: 'Open Sans', sans-serif;
}`;

const Smurf = props => {
  return (
    <SmurfDiv>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

