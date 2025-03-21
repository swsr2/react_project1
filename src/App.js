import './App.css';
import Box from './component/Box';
import { useState } from 'react';

const choice = {
  rock: {
    name: "Rock",
    img: "https://thumb.photo-ac.com/a2/a2d422319008d3fed821408e028e022a_t.jpeg"
  },
  scissors: {
    name: "Scissors",
    img: "https://m.iwings.co.kr/web/product/medium/202009/076d75824e2c7a81f826c17d7ab61dcb.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [comSelect, setComSelect] = useState(null)
  const [result, setResult] = useState("")

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let comChoice = randomChoice()
    setComSelect(comChoice)
    setResult(judgement(choice[userChoice], comChoice))
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomIndex = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomIndex]
    return choice[final]
  }
  const judgement = (user, computer) => {
    if (user.name === computer.name)
      return "Tie"
    else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose"
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose"
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose"
  }

  return (
    <div>
      <h1 className="game-title">Rock! Scissors! Paper!</h1>
      <div className='main'>
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="Computer" item={comSelect} result={result} />
      </div>
      {userSelect === null && <div className='explain'>아래 중 하나를 선택하세요</div>}
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div >
  );
}

export default App;
