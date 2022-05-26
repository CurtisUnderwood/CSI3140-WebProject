import "./App.css";
import { Header, Timer, FourSquare } from "./components";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./pages/game";
import Scores from "./pages/scores";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route to="/">Home</Route>
        <Route path="/trivia" element={<Game />}>
          Trivia App
        </Route>
        <Route path="/highscores" element={<Scores />}>
          Highscores
        </Route>
      </Routes>
    </div>
  );
}

export default App;
