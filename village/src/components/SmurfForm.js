import React, { Component } from 'react';
import Axios from 'axios';
import Styled from 'styled-components';

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
    Axios.post('http://localhost:3333/smurfs', this.state)
    .then(res => {
       console.log(res.data) // did not know what to do with res, so sent it off into the void
    })
    .catch(err => {console.log(err)})

    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push("/"); /* this returns to the smurfs page, but it does 
                                     not refresh the page with newest input. do not know why
                                    page must be refreshed manually for new input to show up */
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormWrapper>
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
      </FormWrapper>
    );
  }
}

const FormWrapper = Styled.div `
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 200px;
      font-size: 1rem;
      padding: 5px;
      margin-top: 8px;
      border-radius: 3px;
      border: none;
      border-bottom: 1px solid lightgray;
      :focus {
        outline: none;
      }
      :first-child {
        margin-top: 40px;
      }
    }

    button {
      margin-top: 30px;
      width: 210px;
      padding: 5px;
      font-size: 1rem;
      border-radius: 3px;
      background-color: lightblue;
    }
  }

`

export default SmurfForm;
