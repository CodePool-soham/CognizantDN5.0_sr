import React from "react";

function IndianPlayers() {

  // ES6 Destructuring
  const players = [
    "Rohit Sharma",
    "Virat Kohli",
    "KL Rahul",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Jasprit Bumrah"
  ];

  const [player1, player2, player3, player4, player5, player6] = players;


  // ES6 Spread Operator - Merge arrays
  const T20players = [
    "Rohit Sharma",
    "Virat Kohli",
    "Hardik Pandya"
  ];

  const RanjiTrophyPlayers = [
    "Ajinkya Rahane",
    "Cheteshwar Pujara",
    "Mayank Agarwal"
  ];

  const allPlayers = [
    ...T20players,
    ...RanjiTrophyPlayers
  ];


  return (
    <div>

      <h1>Indian Players</h1>

      <h2>Odd Team Players</h2>
      <ul>
        <li>{player1}</li>
        <li>{player3}</li>
        <li>{player5}</li>
      </ul>


      <h2>Even Team Players</h2>
      <ul>
        <li>{player2}</li>
        <li>{player4}</li>
        <li>{player6}</li>
      </ul>


      <h2>T20 Players</h2>
      <ul>
        {
          T20players.map(player => (
            <li key={player}>{player}</li>
          ))
        }
      </ul>


      <h2>Ranji Trophy Players</h2>
      <ul>
        {
          RanjiTrophyPlayers.map(player => (
            <li key={player}>{player}</li>
          ))
        }
      </ul>


      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {
          allPlayers.map(player => (
            <li key={player}>{player}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default IndianPlayers;