import React, { Fragment, Component } from 'react';
import Login from "./components/Login"
import './App.css';

class App extends Component {
  componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/users/2')
  //   .then(r=> r.json())
  //   .then(console.log)
  }
  render(){
    return (
    <Fragment className="App">
      Hello I'm react
      <Login/>
    </Fragment>
  );}
}

export default App;
