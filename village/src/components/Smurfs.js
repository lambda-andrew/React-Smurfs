import React, { Component } from 'react';
import Smurf from './Smurf';
import './Smurfs.css'

class Smurfs extends Component {

  routeToSmurf = (e, smurf) =>{
    e.preventDefault();
    this.props.history.push(`/smurfs/${smurf.id}`)
  }

  render() {
    return (
      <div className="Smurfs">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurflist">
              <div className="smurfcard" onClick={e => this.routeToSmurf(e, smurf)}>
                <h3>{smurf.name}</h3>
                <strong>{smurf.height} cm tall</strong>
                <p>{smurf.age} smurf years old</p>
              </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
