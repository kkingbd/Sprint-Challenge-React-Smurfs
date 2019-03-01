import React, { Component } from 'react';
import Smurf from './Smurf';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavBar = styled.div` 
  margin: 15px;
  padding: 10px;
  .add{
    text-decoration: none;
    background: #fff233;
    border-radius: 15%;;
    margin: auto;
  }
  .add:hover{
    background: olive;
    color: white;
    width: 100px;
  }
`;
class Smurfs extends Component {
  render() {
    return ( 
      <NavBar className="Smurfs">
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
        <Link   to='/smurf-form'><button  className='add' to='/smurf-form'>Add Smurf</button> </Link>
      </NavBar>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
