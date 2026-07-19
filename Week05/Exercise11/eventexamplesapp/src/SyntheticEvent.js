import React from "react";

function SyntheticEvent() {

  function handleClick(event) {
    alert("I was clicked");
    console.log(event);
  }

  return (
    <div>

      <h2>Synthetic Event Example</h2>

      <button onClick={handleClick}>
        OnPress
      </button>

    </div>
  );
}

export default SyntheticEvent;