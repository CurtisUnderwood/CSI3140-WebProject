import React, { Component } from "react";
import "../styles.css";
import { A, B, C, D } from "../icons";

class FourSquare extends Component {
  render() {
    return (
      <div
        className={
          "foursquare " +
          (this.props.white ? "white-background " : undefined) +
          (this.props.large ? "large " : "small") +
          (this.props.shadow ? "shadow " : undefined)
        }
      >
        <button className="square a">
          <img src={A}></img>
          <span>{this.props.A}</span>
        </button>
        <button className="square b">
          <img src={B}></img>
          <span>{this.props.B}</span>
        </button>
        <button className="square c">
          <img src={C}></img>
          <span>{this.props.C}</span>
        </button>
        <button className="square d">
          <img src={D}></img>
          <span>{this.props.D}</span>
        </button>
      </div>
    );
  }
}

FourSquare.defaultProps = {
  A: "Earth",
  B: "Wind",
  C: "Fire",
  D: "Water",
  white: true,
  shadow: true,
  large: true,
};

export { FourSquare };
