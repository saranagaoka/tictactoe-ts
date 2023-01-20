import React, { useContext } from "react";
import "./Reset.scss";
import { TicContext } from "./TicContext";

function Reset() {
  const { setGameArr, setPlayer, setWinner } = useContext(TicContext);
  const reset = () => {
    setGameArr([...Array(9)]);
    setPlayer(false);
    setWinner("");
  };
  return (
    <button className="reset" onClick={reset}>
      Reset the game
    </button>
  );
}

export default Reset;
