import React, { Component } from "react";
import "./css/scores.css";
import { Link } from "react-router-dom";

export default class AllScores extends Component {
  render() {
    return (
      <div className="scores">
        <div className="heading score-title">Highscores</div>
        <ol>
          {this.props.highscores.map((highscore) => (
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

AllScores.defaultProps = {
  highscores: [
    {
      score: -1,
      username: "Undefined",
    },
    {
      score: -1,
      username: "Undefined",
    },
    {
      score: -1,
      username: "Undefined",
    },
    {
      score: -1,
      username: "Undefined",
    },
  ],
};
