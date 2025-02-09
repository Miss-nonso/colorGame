import React, { useState, useEffect } from "react";
import "./App.css";

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5"
];

function App() {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [isNewGame, setIsNewGame] = useState(true);

  useEffect(() => {
    refreshColor();
  }, []);

  const refreshColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setGameStatus("");
    setIsNewGame(false);
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      refreshColor();
      setGameStatus("Correct! 🎉");
    } else {
      setGameStatus("Wrong! Try again. ❌");
    }
    setIsNewGame(true);
  };

  const startNewGame = () => {
    setScore(0);
    refreshColor();
  };

  return (
    <div className="App">
      <h1>Color Guessing Game</h1>
      <div className="game-container">
        <div
          className="color-box"
          style={{ backgroundColor: targetColor }}
          data-testid="colorBox"
        ></div>
        <p className="instructions" data-testid="gameInstructions">
          Guess the correct color!
        </p>
        <div className="color-options">
          {colors.map((color, index) => (
            <button
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => handleGuess(color)}
              data-testid="colorOption"
            ></button>
          ))}
        </div>
        <p className="game-status" data-testid="gameStatus">
          {gameStatus}
        </p>
        <p className="score" data-testid="score">
          Score: {score}
        </p>
        <button
          className="new-game-button"
          onClick={startNewGame}
          data-testid="newGameButton"
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
