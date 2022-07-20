import React, { Component } from "react";
import "../styles.css";
import { Topscore, Score } from "../components";
import { Link } from "react-router-dom";
import { highscores } from "./game";

export default class Scores extends Component {
  render() {
    return (
      <div className="scores">
        <div className="heading score-title">Highscores</div>
        {highscores.map((highscore, index) =>
          index < 3 ? (
            <Topscore score={highscore.score} username={highscore.username} />
          ) : (
            <Score score={highscore.score} username={highscore.username} />
          )
        )}
        <Link to="/highscores/all" className="link">
          See all
        </Link>
      </div>
    );
  }
}
