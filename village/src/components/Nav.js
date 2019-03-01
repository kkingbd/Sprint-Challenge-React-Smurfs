import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const NavBar = styled.div` 
    display : flex;
    flex-wrap: wrap;
`;

const Nav = () => {
  return ( 
    <NavBar>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/smurf-form'>Add Smurf</NavLink>
    </NavBar>
   );
}

export default Nav; 