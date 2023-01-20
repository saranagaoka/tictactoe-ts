import React, { useContext } from "react";
import "./Square.scss";
import { TicContext } from "./TicContext";

function Square({ i }: { i: number }) {
  const { gameArr, setGameArr, setPlayer, player, winner } =
    useContext(TicContext);

  const draw = () => {
    if (!gameArr[i]) {
      setGameArr((prev) => {
        const arr = [...prev];
        const symbol = player ? "o" : "x";
        arr[i] = symbol;

        return arr;
      });
    }
  };

  return (
    <button className="square__container" onClick={draw} disabled={!!winner}>
      {gameArr[i]}
    </button>
  );
}

export default Square;
