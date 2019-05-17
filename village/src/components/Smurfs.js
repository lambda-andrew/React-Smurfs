import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              // <Link to={`/smurf/${smurf.id}`}>
                <Smurf
                  {...this.props}
                  update={this.props.update}
                  delete={this.props.delete}
                  data={smurf}
                  key={smurf.id}
                />
              // </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
