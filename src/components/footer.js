import logo from "../icons/logo.svg";
import "../styles.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <header className="header">
      <img src={logo} className="logo"></img>
      <div className="title">
        <Link to="/" className="link">
          Trivia App
        </Link>
      </div>
    </header>
  );
}

export { Footer };
