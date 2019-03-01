import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route,} from 'react-router-dom';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [], 
    };
  }
///////////////////////////////////////////////////////////////////////
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      this.setState({ smurfs: response.data })
    })
    .catch(err => console.log(err))
  }
///////////////////////////////////////////////////////////////////////
  createSmurf = smurf =>{
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res=> {this.setState({smurfs: res.data})})
  }
///////////////////////////////////////////////////////////////////////
  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res=> { this.setState({smurfs: res.data}) ;
         this.props.history.push("/" );})
      .catch(console.log);
  }
///////////////////////////////////////////////////////////////////////
  updateSmurf = (smurf, id) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res=> { this.setState({smurfs: res.data}) ;
    this.props.history.push("/" );})
    .catch(console.log);
  }
///////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="App">
        <Nav />
        <Route path="/smurf-form" render={props => (
            <SmurfForm 
              {...props} 
              createSmurf ={this.createSmurf}
             />
          )}  
        />
        <Route exact path='/' render= { props=> (
            <Smurfs 
                
                smurfs={this.state.smurfs} 
                deleteSmurf ={this.state.smurf}
                
            />
          )}
        />
        
      </div>
    );
  }
}

export default App;
