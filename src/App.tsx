import React from "react";
import Header from "./Header";
import "./App.css";
import Square from "./Square";
import Grid from "./Grid";
import { TicProvider } from "./TicContext";

function App() {
  return (
    <TicProvider>
      <div className="app">
        <Header />
        <Grid />
      </div>
    </TicProvider>
  );
}

export default App;
