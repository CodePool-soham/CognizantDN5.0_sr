import React from "react";

function ListofPlayers() {

  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 75 },
    { name: "MS Dhoni", score: 65 },
    { name: "Sachin Tendulkar", score: 95 },
    { name: "Yuvraj Singh", score: 60 },
    { name: "Hardik Pandya", score: 70 },
    { name: "Ravindra Jadeja", score: 55 },
    { name: "KL Rahul", score: 80 },
    { name: "Shubman Gill", score: 78 },
    { name: "Jasprit Bumrah", score: 90 },
    { name: "Rishabh Pant", score: 68 }
  ];

  // ES6 map() method
  const playerList = players.map(player => (
    <li key={player.name}>
      {player.name} - {player.score}
    </li>
  ));

  // ES6 arrow function with filter()
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <h3>All Players</h3>
      <ul>
        {playerList}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {
          filteredPlayers.map(player => (
            <li key={player.name}>
              {player.name} - {player.score}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ListofPlayers;