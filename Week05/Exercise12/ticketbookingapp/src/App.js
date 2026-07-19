import './App.css';
import React, { useState } from "react";

import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function handleLogin() {
    setIsLoggedIn(true);
  }


  function handleLogout() {
    setIsLoggedIn(false);
  }


  return (
    <div className="App">

      <h1>Ticket Booking Application</h1>


      <Greeting isLoggedIn={isLoggedIn} />


      {
        isLoggedIn ?

        <LogoutButton onClick={handleLogout} />

        :

        <LoginButton onClick={handleLogin} />

      }


    </div>
  );
}

export default App;