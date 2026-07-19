/*import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {
  let average =
    (parseInt(props.Total) / parseInt(props.goal)) * 100;

  return (
    <div>
      <h2>Student Score Details</h2>

      <p>Name: {props.Name}</p>
      <p>School: {props.School}</p>
      <p>Total Score: {props.Total}</p>
      <p>Goal: {props.goal}</p>
      <p>Average Score: {average}%</p>
    </div>
  );
}

export default CalculateScore;*/

import '../Stylesheets/mystyle.css'
const percentToDecimal=(decimal)=>{
    return (decimal.toFixed(2)+'%')
}

const calcScore=(total,goal)=>{

    return percentToDecimal(total/goal)
}

export const  CalculateScore=({Name,School,total,goal})=>(
    <div className="formatstyle">
        <h1>
            <font color="Brown">Student Details:</font></h1>

        <div className="Name">
            <b><span>Name:</span></b>
            <span>{Name}</span>
        </div>
        <div className="School">
            <b><span>Total:</span></b>
            <span>{total}</span>
            <span>Marks</span>
        </div>

        <div className="Score">
            <b>Score:</b>
            <span>
                {calcScore(total,goal)}
            </span>
        </div>

    </div>
)