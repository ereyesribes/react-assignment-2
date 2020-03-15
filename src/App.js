import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';


class App extends Component {
  state = {
    inputText: "Uninteresting Sample Text."
  }

  changeTextHandler = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    const inputStyle = {
      border: "1px solid #ccc",
      padding: "12px",
      boxShadow: "1px 1px 3px 0px rgba(0,0,0,0.15)",
      margin: "17px"
    };


    return (
      <div className = "App">
      <input
        type = "text"
        onChange = { this.changeTextHandler }
        value = { this.state.inputText }
        style = { inputStyle }
      />

      <ValidationComponent length = { this.state.inputText.length } />
      </div>
    );
  }
}

export default App;
