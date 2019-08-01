import React from "react";
import "./style.css";

function CartoonCard(props) {
  return (
    <div className="card">
        <img style={{ height: 200 }} alt={props.name} src={props.image} onClick={props.handleClick} />
    </div>
  );
}

export default CartoonCard;
