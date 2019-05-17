import React from 'react';

const SmurfCurrent = props => {
    return (
        <div className="Smurf">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtr0bjLHrgjsfjurQFGyFk9DxU2i322SEH6DG-f8u7HsqKLhES"/>
          <h3>{props.data.name}</h3>
          <strong>{props.data.height} tall</strong>
          <p>{props.data.age} smurf years old</p>
          <button onClick={props.update}>Update Smurf</button>
          <button onClick={props.delete}>Delete</button>
        </div>
    );
}

export default SmurfCurrent;


