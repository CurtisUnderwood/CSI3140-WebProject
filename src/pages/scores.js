import React, { Component } from "react";
import "../styles.css";
import { Topscore, Score } from "../components";
import { Link } from "react-router-dom";

export default class Scores extends Component {
  render() {
    return (
      <div className="scores">
        <div className="heading score-title">Highscores</div>
        {this.props.highscores.map((highscore, index) =>
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

Scores.defaultProps = {
  highscores: [
    {
      score: 10,
      username: "Player Name",
    },
    {
      score: 4,
      username: "Username",
    },
    {
      score: -2,
      username: "Sample Name",
    },
    {
      score: 1,
      username: "Name Name",
    },
  ],
};
