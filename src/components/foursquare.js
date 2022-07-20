import React, { Component } from "react";
import "../styles.css";
import { A, B, C, D } from "../icons";
const OPTIONS = [A, B, C, D];

class FourSquare extends Component {
  render() {
    return (
      <div className="foursquare">
        {OPTIONS.map((option, index) => (
          <button
            className={"square " + String.fromCharCode(65 + index)}
            onClick={() => {
              this.props.handleClick(this.props.options[index].correctFlag);
            }}
          >
            <img src={option}></img>
            <span>{this.props.options[index].title}</span>
          </button>
        ))}
      </div>
    );
  }
}

export { FourSquare };
