import "./styles.css";
import { Header } from "./components";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./pages/game";
import Scores from "./pages/scores";
import AllScores from "./pages/allscores";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/trivia" element={<Game />}>
          Trivia App
        </Route>
        <Route path="/highscores" element={<Scores />}>
          Highscores
        </Route>
        <Route path="/highscores/all" element={<AllScores />}>
          See all highscores
        </Route>
      </Routes>
    </div>
  );
}

export default App;
