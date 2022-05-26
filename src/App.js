import "./App.css";
import { Header, Timer, FourSquare } from "./components";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./pages/game";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route to="/">Home</Route>
        <Route path="/trivia" element={<Game />}>
          Trivia App
        </Route>
        <Route to="highscores">Highscores</Route>
      </Routes>
    </div>
  );
}

export default App;
