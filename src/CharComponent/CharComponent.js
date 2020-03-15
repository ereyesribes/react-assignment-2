import React, { Component } from 'react';


function validationComponent(props) {
  const charStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid #ccc",
    boxShadow: "1px 1px 3px 0px rgba(0,0,0,0.15)",
    minWidth: "25px"
  };

  return (
    <div style = { charStyle }>
      { '"' + props.char + '"' }
    </div>
  );
}


export default validationComponent;
