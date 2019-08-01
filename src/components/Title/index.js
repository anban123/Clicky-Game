import React from "react";
import "./style.css";

function Title(props) {
  return (
  <>
    <h1 className="title">{props.children}</h1>
    <h2 className="title-words">90's Cartoons!</h2>
    <h3 className="score" style={{ display: "inline" }}>Score: {props.score}</h3>
  </>
  )

}

export default Title; 
