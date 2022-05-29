import React, { Component } from "react";
import questionBox from "../icons/questionbox.svg";
import questionBoxWhite from "../icons/questionBoxWhite.svg";
import logoBlock from "../icons/logoBlock.svg";
import timerBlock from "../icons/timerBlock.svg";
import "../styles.css";
import { Footer } from "../components";

export default class Home extends Component {
  render() {
    return (
      <div class="layout">
          <div class="banner">
            <div class="row">
              <div class="column">
                <h1>Welcome to Trivia App!</h1>
                <p>Get started or learn how to play.</p>
                <a href='/trivia' class="playButton">Play Now</a>
              </div>
              <div class="column">
                <img src={questionBox}/>
              </div>
            </div>
          </div>

          <div class="row">
              <div class="column">
                <div class="banner">
                  <h1>How to Play</h1>
                  <p>Learn how to play with our players guide down below.</p>
                </div>
              </div>
              <div class="column">
                <img src={logoBlock}/>
              </div>
          </div>

          <div class="row">
              <div class="column">
                <div class="banner">
                  <h1>1. Select one of the four boxes to answer a question</h1>
                </div>
              </div>
              <div class="column">
                <img src={questionBoxWhite}/>
              </div>
          </div>

          <div class="row">
              <div class="column">
                <div class="banner">
                  <h1>2. Answer before the time runs out!</h1>
                </div>
              </div>
              <div class="column">
                <img src={timerBlock}/>
              </div>
          </div>

          <Footer />
      </div>
    );
  }
}
