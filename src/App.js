import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    inputText: "Uninteresting Sample Text."
  }

  changeTextHandler = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }


  removeCharHandler = (event, index) => {
    let inputArray = this.state.inputText.split('');

    inputArray.splice(index, 1);

    this.setState({
      inputText: inputArray.join('')
    });
  }


  render() {
    return (
      <div className = "App">
        <input
          type = "text"
          onChange = { this.changeTextHandler }
          value = { this.state.inputText }
        />

        <ValidationComponent length = { this.state.inputText.length } />

        <div className = "CharContainer">
          {
            this.state.inputText.split('').map((char, index) => {
              return <CharComponent char = { char } key = { index } click = { (event) => this.removeCharHandler(event, index) }/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
