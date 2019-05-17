import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf || {
      name: '',
      age: '',
      height: ''
    }
  };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.props.activeSmurf) {
      this.props.updateSmurf(this.state.smurf)
    } else {
      this.props.addSmurf(this.state.smurf)
    }
}

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurf: {
      ...prevState.smurf,
      [e.target.name]: e.target.value, 
      }
    })
    )
  };

  render() {
    return (
      <div >
        <form className="smurfform" onSubmit={this.addSmurf}>
          <input
            className="smurfinput"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            className="smurfinput"  
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            className="smurfinput"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
