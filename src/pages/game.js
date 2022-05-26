import { Header } from "../components/header.js";
import React, { Flexbox, Component } from "react";
import { FourSquare } from "../components/foursquare";
import { Timer } from "../components/timer";
import "./game.css";

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <Timer />
        <span className="question">{this.props.question}</span>
        <FourSquare />
      </div>
    );
  }
}

Game.defaultProps = {
  question: "What is the majority of earths surface covered in?",
};