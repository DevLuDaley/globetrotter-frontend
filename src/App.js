import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/users/2')
  //   .then(r=> r.json())
  //   .then(console.log)
  // }
  render(){
    return (
    <Fragment className="App">
      Hello I'm react
    </Fragment>
  );}
}

export default App;
