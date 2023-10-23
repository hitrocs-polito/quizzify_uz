import React from "react";

export default function StartMenu(props) {
  return (
    <div className="start-menu">
      <h1>Quizzify</h1>
      <p>Take a test. Show your power in technology. Do your best!</p>
      <button className="start-button" onClick={props.handleStart}>
        Start quiz
      </button>
    </div>
  );
}
