import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 420px;
height: 180px;
margin: 20px 20px;
line-height: 15px;
background-color: white;
border-radius: 5px;
`;

const NameH3 = styled.h3`
font-size: 25px;
`;

const Strong = styled.strong`
font-size: 20px;
`;


const Smurf = props => {
  return (
    <SmurfDiv>
      <NameH3><strong>{props.name}</strong></NameH3>
      <p><Strong>{props.height} </Strong>TALL</p>
      <p><Strong>{props.age} </Strong>SMURF YEARS OLD </p>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

