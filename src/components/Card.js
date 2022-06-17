import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  {
    /*Pazi na razmak između "Card " + props.classname*/
  }
  return <div className={classes}>{props.children}</div>;
};

export default Card;
