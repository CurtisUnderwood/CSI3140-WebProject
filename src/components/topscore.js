import React, { Component } from "react";
import "../styles.css";

class Topscore extends Component {
  render() {
    return (
      <div className="score-card">
        <div className="score-card-dot ">{this.props.score}</div>
        <span className="username">{this.props.username}</span>
      </div>
    );
  }
}

export { Topscore };
