import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SmartClick from "./components/SmartClick"
import 'materialize-css/dist/css/materialize.min.css';
// import Navbar from "./components/Navbar";

// import DumbClick from "./components/DumbClick"

class App extends Component {
  render() {
    return (
      <>
      <SmartClick />
      </>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
