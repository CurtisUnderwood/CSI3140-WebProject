import logo from "../icons/logo.svg";
import "./css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="home">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
      <img src={logo} className="logo"></img>
      <div className="title">
        <Link to="/trivia" className="link">
          Trivia App
        </Link>
      </div>
      <div className="highscores">
        <Link to="/highscores" className="link">
          Highscores
        </Link>
      </div>
    </header>
  );
}

export { Header };
