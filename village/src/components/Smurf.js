import React from 'react';
import { NavLink } from 'react-router-dom';
const Smurf = props => {
  const info = {
    name: props.name,
    height: props.height,
    age: props.age
  };
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.id)} >Delete</button>
      <NavLink to={`/smurf-form/${props.id}`} oonClick={() => props.updateSmurf(props.id, info)}>
          <button> Update </button>
       </NavLink>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '', 
  age: ''
};

export default Smurf;

