import React, { Component } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { highscores } from "./game";

export default class AllScores extends Component {
  render() {
    return (
      <div className="scores">
        <div className="heading score-title">Highscores</div>
        <ol>
          {highscores.map((highscore) => (
            <li>{highscore.username + ": " + highscore.score}</li>
          ))}
        </ol>
        <Link to="/highscores" className="link">
          Back
        </Link>
      </div>
    );
  }
}
