import React from 'react';

const SmurfCurrent = props => {
    return (
        <div className="Smurf">
          <h3>{props.data.name}</h3>
          <strong>{props.data.height} tall</strong>
          <p>{props.data.age} smurf years old</p>
          <button onClick={props.update}>Update Smurf</button>
          <button onClick={props.delete}>Delete</button>
        </div>
    );
}

export default SmurfCurrent;


