import React, { Component } from 'react';
import './ValidationComponent.css';


function validationComponent(props) {
  let validatorOutput = (
    <span className = 'valid'>
      Text long enough
    </span>
  );

  if (props.length < 3) {
    validatorOutput = (
      <span className = 'invalid'>
        Text too short
      </span>
    );
  }

  return (
    <div className = "ValidationComponent">
      { validatorOutput }
    </div>
  );
}


export default validationComponent;
