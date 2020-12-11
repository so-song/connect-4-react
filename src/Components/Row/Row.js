import React from "react";
import "./Row.css";
import Cell from "../Cell";

function Row({ board, posY, setGame, setGameOver, gameOver, setWinner, game }) {
  return (
    <tr>
      {board &&
        board.map((cell, index) => (
          <Cell
            posX={index}
            posY={posY}
            value={cell}
            key={index}
            setGame={setGame}
            setGameOver={setGameOver}
            gameOver={gameOver}
            setWinner={setWinner}
            game={game}
          />
        ))}
    </tr>
  );
}

export default Row;
