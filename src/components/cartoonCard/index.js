import React from "react";
import "./style.css";

function CartoonCard(props) {
  return (
    <div className="card">
        <img style={{ height: 175, width: 225 }} alt={props.name} src={props.image} onClick={props.handleClick} />
    </div>
  );
}

export default CartoonCard;
