import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const NavBar = styled.div` 

  margin: 15px;
  padding: 10px;
  
  .SmurfForm{
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
  justify-content:flex-end;
  }
  .button{
    width: 30%;
    margin-top: 30px;
  }
`;
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  } 
  componentDidMount = () => {
    if(this.props.info) this.setState({name: this.props.info.name, age: this.props.info.age, height:this.props.info.height});
  }
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if(this.props.updateList) {
      axios.post('http://localhost:3333/smurfs', this.state)
      .then(res => {
        this.props.updateList(res.data);
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
    } else if(this.props.updateSmurf) {
      this.props.updateSmurf(this.state);
      this.props.history.push('/');
    }
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <NavBar>
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className='button' type="submit">Add to the village</button>
        </form>
      </div>
      </NavBar>
    );
  }
}

export default SmurfForm;
