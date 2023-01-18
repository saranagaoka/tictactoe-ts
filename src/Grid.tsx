import React, { useState, useContext } from "react";
import Square from "./Square";
import "./Grid.scss";

function Grid() {
  return (
    <div className="grid">
      {[...Array(9)].map((el, i) => (
        <Square i={i} />
      ))}
    </div>
  );
}

export default Grid;
