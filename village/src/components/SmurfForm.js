import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form =styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 0;
`;

const Input =styled.input`
width: 400px;
height: 40px;
background-color: white;
text-align: center;
border-radius: 5px;
border: white;
`;

const Button = styled.button`
width: 410px;
height: 60px;
background-color: #62fdbe;
text-align: center;
border-radius: 5px;
margin: 40px;
font-size: 15px;
border: none;
:hover {
  background-color: white;
  border : #62fdbe solid 5px;
}
`;


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  
  axios
  .post('http://localhost:3333/smurfs', newSmurf)
  .then (response=> {
    this.props.setSmurfs(response.data);
    this.props.history.push('/');
  })
  .catch (error => {
    console.log ("Server Error" , error)
  })
}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">

        <Form onSubmit={this.addSmurf}>
        <p>NAME</p>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <p>AGE</p>
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <p>HEIGHT</p>
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Button type="submit" onClick={(event)=> this.addSmurf(event)}> ADD TO THE VILLAGE</Button>
        </Form>

      </div>
    );
  }
}

export default SmurfForm;
