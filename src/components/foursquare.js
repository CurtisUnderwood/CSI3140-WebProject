import React, { Component } from "react";
import "./css/foursquare.css";
import "./css/foursquare-themes.css";
import A from "../icons/A.svg";
import B from "../icons/B.svg";
import C from "../icons/C.svg";
import D from "../icons/D.svg";

class FourSquare extends Component {
  render() {
    return (
      <div
        className={
          "foursquare " +
          (this.props.white ? "white-background " : undefined) +
          (this.props.shadow ? "shadow " : undefined)
        }
      >
        <div className="square a">
          <img src={A}></img>
          <span>{this.props.A}</span>
        </div>
        <div className="square b">
          <img src={B}></img>
          <span>{this.props.B}</span>
        </div>

        <div className="square c">
          <img src={C}></img>
          <span>{this.props.C}</span>
        </div>
        <div className="square d">
          <img src={D}></img>
          <span>{this.props.D}</span>
        </div>
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
};

export { FourSquare };
