import React, { useContext } from "react";
import "./Square.scss";
import { TicContext } from "./TicContext";

function Square({ i }: { i: number }) {
  const { gameArr, setGameArr, setPlayer, player } = useContext(TicContext);

  const draw = () => {
    if (!gameArr[i]) {
      setGameArr((prev) => {
        const arr = [...prev];
        const symbol = player ? "o" : "x";
        arr[i] = symbol;

        return arr;
      });
      setPlayer((prev) => !prev);
    }
  };

  return (
    <div className="square__container" onClick={draw}>
      {gameArr[i]}
    </div>
  );
}

export default Square;
