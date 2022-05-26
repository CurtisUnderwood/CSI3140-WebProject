import logo from "../icons/logo.svg";
import "./css/header.css";

function Header() {
  return (
    <header className="header">
      <div className="home">Home</div>
      <img src={logo} className="logo"></img>
      <div className="title">Trivia App</div>
      <div className="highscore">Highscore</div>
    </header>
  );
}

export { Header };
