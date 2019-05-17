import React from 'react';
import SmurfCurrent from './SmurfDisplay/SmurfCurrent';
import SmurfUpdate from './SmurfDisplay/SmurfUpdate';

class Smurf extends React.Component {
  state = {
    updateInfo: false
  }

  deleteHandler = e => {
    e.preventDefault();
    this.props.delete(this.props.data.id)
  }

  updateDisplay = e  => {
    e.preventDefault();
    this.setState({
        updateInfo: !this.state.updateInfo
    })
  }

  render() {
    if(!this.state.updateInfo) {
      return <SmurfCurrent {...this.props} data={this.props.data} delete={this.deleteHandler} update={this.updateDisplay}/>
    } else {
      return <SmurfUpdate {...this.props} data={this.props.data} updateDisplay={this.updateDisplay} update={this.props.update}/>
    }
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

