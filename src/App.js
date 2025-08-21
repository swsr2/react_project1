import "./App.css";
import Box from "./component/Box";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const choice = {
  rock: {
    name: "Rock",
    emoji: "✊🏻",
  },
  scissors: {
    name: "Scissors",
    emoji: "✌🏻",
  },
  paper: {
    name: "Paper",
    emoji: "✋🏻",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    setResult(judgement(choice[userChoice], comChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomIndex = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomIndex];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) return "Tie";
    else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  return (
    <Container className="my-5">
      <h1 className="game-title text-center mb-4">두근두근 가위바위보!</h1>
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={5} className="mb-3 mb-md-0">
          <Box title="YOU" item={userSelect} result={result} />
        </Col>
        <Col xs={12} md={5}>
          <Box title="Computer" item={comSelect} result={result} />
        </Col>
      </Row>
      {userSelect === null && (
        <p className="explain text-center">아래 중 하나를 선택하세요</p>
      )}
      <Row className="justify-content-center">
        <Col xs={4} md={2} className="d-grid gap-2">
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => play("scissors")}
          >
            ✌🏻 가위
          </Button>
        </Col>
        <Col xs={4} md={2} className="d-grid gap-2">
          <Button
            variant="outline-danger"
            size="lg"
            onClick={() => play("rock")}
          >
            ✊🏻 바위
          </Button>
        </Col>
        <Col xs={4} md={2} className="d-grid gap-2">
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => play("paper")}
          >
            ✋🏻 보
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
