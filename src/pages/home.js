import React, { Component } from "react";
import questionBox from "../icons/questionbox.svg";
import questionBoxWhite from "../icons/questionBoxWhite.svg";
import scoreBox from "../icons/scoreBox.svg";
import "../styles.css";
import { Footer } from "../components";

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

          <div className="row">
              <div className="column">
                <div className="banner">
                  <h1>How to Play</h1>
                  <p>Learn how to play with our players guide down below.</p>
                </div>
              </div>
              <div className="column">
                <img src={questionBox}></img>
              </div>
          </div>

          <div className="row">
              <div className="column">
                <div className="banner">
                  <h1>1. Select one of the four boxes to answer a question</h1>
                </div>
              </div>
              <div className="column">
                <img src={questionBoxWhite}></img>
              </div>
          </div>

          <div className="row">
              <div className="column">
                <div className="banner">
                  <h1>2. Answer before the time runs out!</h1>
                </div>
              </div>
              <div className="column">
                <img src={scoreBox}></img>
              </div>
          </div>

          <Footer />
      </div>
    );
  }
}
