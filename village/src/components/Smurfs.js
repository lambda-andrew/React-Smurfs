import React, { Component } from 'react';
import Smurf from './Smurf';

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
              // <Smurf
              //   name={smurf.name}
              //   id={smurf.id}
              //   age={smurf.age}
              //   height={smurf.height}
              //   key={smurf.id}
              // />
    
              <div onClick={e => this.routeToSmurf(e, smurf)}>
                <h3>{smurf.name}</h3>
                <strong>{smurf.height} cm tall</strong>
                <p>{smurf.age} smurf years old</p>
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
