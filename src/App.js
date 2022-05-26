import logo from "./logo.svg";
import "./App.css";
import "./header.css";

function App() {
  return (
    <div className="App">
      <header className="front-page header">
        <div className="home">Home</div>
        <img src={logo} className="logo"></img>
        <div className="title">Trivia App</div>
        <div className="highscore">Highscore</div>
      </header>
    </div>
  );
}

export default App;
