import React from "react";
import "./Board.css";
import Row from "../Row";

function Board({ setGame, setGameOver, gameOver, setWinner, game }) {
  return (
    <table>
      <tbody>
        {game &&
          game.map((row, index) => {
            return (
              <Row
                posY={index}
                board={row}
                key={index}
                setGame={setGame}
                setGameOver={setGameOver}
                gameOver={gameOver}
                setWinner={setWinner}
                game={game}
              />
            );
          })}
      </tbody>
    </table>
  );
}
export default Board;
