import React from "react";
import "./Reset.css";

function Reset() {
  function resetGame() {
    setGame(initBoard);
    setGameOver(false);
    setWinner(null);
  }

  return (
    <div>
      <button className="game-reset" onClick={() => resetGame()}>
        New game
      </button>
      {gameOver && (
        <div className={"modal__winner"}>
          <p>
            Player {winner}: {winner === 1 ? "Red" : "Yellow"} wins!
          </p>
          <p>Click on "New game" to restart the game</p>
        </div>
      )}
    </div>
  );
}

export default Reset;
