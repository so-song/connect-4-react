import React, { useState } from "react";
import "./Game.css";
import Board from "../Board";

// Function to create the initial board, type Array[Array[]]
export const initBoard = () => {
  const board = [];

  // Grids : 6 rows, 7 columns
  for (let y = 0; y < 6; y++) {
    let row = [];
    for (let x = 0; x < 7; x++) {
      row.push(null);
    }
    board.push(row);
  }

  return board;
};

function Game() {
  // Initialization of the initBoard (game) that will be modified as the game progresses (setGame)
  const [game, setGame] = useState(initBoard);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  // Reset function
  function Reset() {
    function resetGame() {
      setGame(initBoard);
      setGameOver(false);
      setWinner(null);
    }
    return (
      <button onClick={() => resetGame()} className="game-reset">
        New game
      </button>
    );
  }

  return (
    <div>
      <Board
        setGame={setGame}
        setGameOver={setGameOver}
        gameOver={gameOver}
        setWinner={setWinner}
        game={game}
      />
      <br />
      <div>
        <Reset />
        {gameOver && (
          <div className={"winner"}>
            <p>
              Player {winner}: {winner === 1 ? "Red" : "Yellow"} wins!
            </p>
            <p>Click on "New game" to restart the game</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
