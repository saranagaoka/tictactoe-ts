import React from "react";
import Header from "./Header";
import "./App.css";
import Grid from "./Grid";
import { TicProvider } from "./TicContext";
import Input from "./Input";
import Reset from "./Reset";

function App() {
  return (
    <TicProvider>
      <div className="app">
        <div className="middle">
          <Header />
          <Input />
          <Reset />
        </div>
        <Grid />
      </div>
    </TicProvider>
  );
}

export default App;
