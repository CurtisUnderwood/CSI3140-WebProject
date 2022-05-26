import logo from "../icons/logo.svg";
import "./css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <img src={logo} className="logo"></img>
      <div className="title">
        <Link to="trivia">Trivia App</Link>
      </div>
      <div className="highscore">
        <Link to="highscores">Highscores</Link>
      </div>
    </header>
  );
}

export { Header };
