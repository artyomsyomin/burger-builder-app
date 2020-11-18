import React from "react";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}:</span>{" "}
        {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order:</h3>
      <ul>{ingredientSummary}</ul>
      <p>Continue?</p>
    </>
  );
};

export default OrderSummary;