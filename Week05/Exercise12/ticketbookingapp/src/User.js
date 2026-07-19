import React from "react";

function User() {
  return (
    <div>

      <h2>Welcome Logged In User</h2>

      <h3>Flight Details</h3>

      <ul>
        <li>Flight: Air India AI-101</li>
        <li>From: Delhi</li>
        <li>To: Mumbai</li>
        <li>Time: 10:00 AM</li>
      </ul>

      <button>
        Book Ticket
      </button>

    </div>
  );
}

export default User;