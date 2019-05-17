import React from 'react';
import './Smurfs.css';

function Smurf (props) {
  const item = props.items.find(
    thing => `${thing.id}` === props.match.params.id
  );

  if (!props.items.length || !item){
    return <h2>Searching for Smurf</h2>
  }

  const deleteHandler = event => {
    event.preventDefault();
    props.deleteSmurf(props.match.params.id);
  }

  const populateHandler = event => {
    event.preventDefault();
    props.populateForm(item)
  }

  return (
    <div className="smurf">
      <h3>{item.name}</h3>
      <strong>{item.height} tall</strong>
      <p>{item.age} smurf years old</p>
      <button className="smurfbutton" onClick={deleteHandler}>Delete Smurf!</button>
      <button className="smurfbutton" onClick={populateHandler}>Update Smurf!</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

