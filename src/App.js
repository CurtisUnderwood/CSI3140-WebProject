import "./App.css";
import { Header } from "./components/header.js";
import React from "react";
import { FourSquare } from "./components/foursquare";

function App() {
  return (
    <div className="App">
      <Header />
      <FourSquare />
    </div>
  );
}

export default App;
