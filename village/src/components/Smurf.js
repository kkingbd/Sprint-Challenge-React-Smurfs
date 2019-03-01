import React from 'react';
import { NavLink } from 'react-router-dom';
const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick ={()=> {this.props.deleteSmurf(props.id)}}>Delete</button>
      <NavLink to= {`/update-form/${props.id}`}>
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

