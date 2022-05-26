import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FourSquare } from "../components/foursquare";
import "./css/home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <Link to="/trivia" className="link">
            Play now
          </Link>
        </div>
        <div>
          <FourSquare />
        </div>
        <div className="heading timer">0:31</div>
      </div>
    );
  }
}
