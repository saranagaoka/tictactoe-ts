import React, { useContext } from "react";
import "./Input.scss";
import { TicContext } from "./TicContext";

function Input() {
  const { namePlayerO, namePlayerX, setNamePlayerO, setNamePlayerX } =
    useContext(TicContext);

  return (
    <div className="input">
      <form>
        <p>O</p>
        <input
          type="text"
          value={namePlayerO}
          placeholder="Nickname"
          onChange={(e) => setNamePlayerO(e.target.value)}
        />
      </form>
      <form>
        <p>X</p>
        <input
          type="text"
          value={namePlayerX}
          placeholder="Nickname"
          onChange={(e) => setNamePlayerX(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Input;
