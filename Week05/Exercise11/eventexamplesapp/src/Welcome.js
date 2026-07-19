import React from "react";

function Welcome() {

  function sayWelcome(message) {
    alert(message);
  }

  return (
    <div>

      <h2>Welcome Example</h2>

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

    </div>
  );
}

export default Welcome;