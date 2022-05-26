import React, { Component } from "react";
import "./css/score-card.css";

class Score extends Component {
  render() {
    return (
      <div className="score-card normal-score">
        <div>{this.props.score}</div>
        <span>{this.props.username}</span>
      </div>
    );
  }
}

export { Score };
