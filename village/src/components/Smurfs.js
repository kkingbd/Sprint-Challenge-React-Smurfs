import React, { Component } from 'react';
import Smurf from './Smurf';
import { Link } from 'react-router-dom';

class Smurfs extends Component {
  render() {
    return ( 
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                id={smurf.id}
                name={smurf.name}
                age={smurf.age}
                height={smurf.height} 
                deleteSmurf={this.props.deleteSmurf}
                updateSmurf={this.props.updateSmurf}
              />
            );
          })}
        </ul>
        <Link to='/smurf-form'>Add Smurf</Link>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
