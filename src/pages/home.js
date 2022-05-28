import React, { Component } from "react";
import questionBox from "../icons/questionbox.svg";
import { Link } from "react-router-dom";
import { FourSquare } from "../components/foursquare";
import "../styles.css";

export default class Home extends Component {
  render() {
    return (
      <div className="layout">
          <div className="banner">
            <div className="row">
              <div className="column">
                <h1>Welcome to Trivia App!</h1>
                <p>Get started or learn how to play.</p>
                <a href='/trivia' className="playButton">Play Now</a>
              </div>
              <div className="column">
                <img src={questionBox}></img>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
