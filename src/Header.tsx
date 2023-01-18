import React, { useContext, useEffect } from "react";
import { TicContext } from "./TicContext";
import "./Header.scss";

function Header() {
  const { player, gameArr, winner, setWinner } = useContext(TicContext);

  useEffect(() => {
    let endGame = true;
    if (
      (gameArr[1] && gameArr[0] === gameArr[1] && gameArr[1] === gameArr[2]) ||
      (gameArr[3] && gameArr[3] === gameArr[4] && gameArr[4] === gameArr[5]) ||
      (gameArr[6] && gameArr[6] === gameArr[7] && gameArr[7] === gameArr[8]) ||
      (gameArr[6] && gameArr[0] === gameArr[3] && gameArr[3] === gameArr[6]) ||
      (gameArr[4] && gameArr[1] === gameArr[4] && gameArr[4] === gameArr[7]) ||
      (gameArr[2] && gameArr[2] === gameArr[5] && gameArr[5] === gameArr[8]) ||
      (gameArr[0] && gameArr[0] === gameArr[4] && gameArr[4] === gameArr[8]) ||
      (gameArr[2] && gameArr[2] === gameArr[4] && gameArr[4] === gameArr[6])
    ) {
      setWinner(player ? "x" : "o");
    } else {
      gameArr.forEach((el) => {
        if (!el) {
          endGame = false;
        }
      });
      endGame && setWinner("Draw!");
    }
  }, gameArr);
  return (
    <div className="header">
      {winner == ""
        ? `${player ? "O" : "X"}, it's your turn!`
        : winner == "Draw!"
        ? "Draw!"
        : `${winner} you won!`}
    </div>
  );
}

export default Header;
