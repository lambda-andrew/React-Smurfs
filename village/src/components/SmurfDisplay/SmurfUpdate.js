import React from 'react';

class SmurfUpdate extends React.Component {
    state = {
        smurf: {
            name: this.props.data.name,
            age: this.props.data.age,
            height: this.props.data.height,
            id: this.props.data.id
        }
    }

    updateInfo = e => {
        e.preventDefault();
        this.props.update(this.state.smurf, this.state.smurf.id)
        this.props.updateDisplay(e);
    }

    cancelUpdate = e => {
        e.preventDefault();
        this.props.updateDisplay(e);
    }

    handleInputChange = e => {
        e.persist();
        this.setState(prevState => ({ 
          smurf: {
            ...prevState.smurf,
            [e.target.name]: e.target.value 
          }
        }));
    };

    render() {
        return (
            <div className="Smurf">
              <form onSubmit={this.updateInfo}>
                  <input name='name' value={this.state.smurf.name} onChange={this.handleInputChange}/>
                  <input name='age' value={this.state.smurf.age} onChange={this.handleInputChange}/>
                  <input name='height' value={this.state.smurf.height} onChange={this.handleInputChange}/>
                <button>Update Smurf</button>
              </form>
              <button onClick={this.cancelUpdate}>Cancel Update</button>
            </div>
        );
    }
}

export default SmurfUpdate;


