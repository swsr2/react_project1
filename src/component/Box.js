import React from 'react';
import { Card } from 'react-bootstrap';

const Box = (props) => {
  let result;
  if (props.title === "Computer" && props.result !== "Tie" && props.result !== "") {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <Card className={`box ${result}`}>
      <div className="emoji-display">
        {props.item?.emoji || "❓"}
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="result-text">{result}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Box;
