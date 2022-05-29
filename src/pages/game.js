import React, { Component } from "react";
import { FourSquare } from "../components/foursquare";
import { Timer } from "../components/timer";
import "../styles.css";

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <Timer />
        <span className="game-score">Score: 1</span>
        <span className="question">{this.props.question}</span>
        <FourSquare />
      </div>
    );
  }
}

Game.defaultProps = {
  question: "What is the majority of earths surface covered in?",
};
