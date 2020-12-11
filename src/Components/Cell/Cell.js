import React from "react";
import "./Cell.css";
import { getWinner } from "../../getWinner";

function Cell(props) {
  // Function pour jouer, avoir des positions x et y sur la tableau, il faut créer une copy du tableau pour pouvoir set le la valeur dedans
  function play(tab, x, y) {
    // Tu crées la copie de ton tableau
    const copyBoard = [...tab];

    if (!props.gameOver) {
      for (let r = 5; r >= 0; r--) {
        if (!copyBoard[r][y]) {
          copyBoard[r][y] = player(tab);
          break;
        }
      }
      // 1 --> Red
      // 2 --> Yellow
      const winnerPlayer = getWinner(copyBoard);
      if (winnerPlayer === 1) {
        // Red
        props.setGameOver(true);
        props.setWinner(winnerPlayer);
      }
      if (winnerPlayer === 2) {
        // Yellow
        props.setGameOver(true);
        props.setWinner(winnerPlayer);
      }
      props.setGame(copyBoard);
    }
  }

  // Function pour récupérer quand c'est paire
  function isEven(num) {
    return num % 2 === 0;
  }

  function player(tableau) {
    //on flat le tableau
    const emptyCells = tableau.flat().filter(element => element === null)
      .length;

    return isEven(emptyCells) ? 1 : 2;
  }

  return (
    <td
      onClick={() => play(props.game, props.posY, props.posX)}
      className={
        props.value === 1 ? "red" : props.value === 2 ? "yellow" : "white"
      }
    ></td>
  );
}

export default Cell;
