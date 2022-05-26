import "./App.css";
import { Header } from "./components/header.js";
import React from "react";
import { FourSquare } from "./components/foursquare";
import { Timer } from "./components/timer";

function App() {
  return (
    <div className="App">
      <Header />
      <FourSquare />
      <Timer />
    </div>
  );
}

export default App;
