import React, { useState, useEffect } from "react";
import { Timer } from "../components/timer";
import "../styles.css";
import { questions } from "../questions.js";
import { FourSquare } from "../components/foursquare";

// There is no backend so this will do, not perfect because it only lasts the session but it is the best we can do!
// Scores do not persist so we do not need to worry about ordering
// We are not going to worry about it too much because we were supposed to do a backend not try to hack react and store a variable to persit

const highscores = [
  {
    score: -1,
    username: "Anthony Zhao",
  },
  {
    score: -1,
    username: "Curtis Underwood",
  },
];

function Game() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    shuffle(questions);
    setShuffledQuestions(questions);
  }, []);

  // Fisher-Yates shuffle algorithm
  function shuffle(array) {
    var idx = array.length;

    while (idx--) {
      let ran_idx = Math.floor(Math.random() * (idx + 1));

      // Swap random index with current index
      let temp = array[idx];
      array[idx] = array[ran_idx];
      array[ran_idx] = temp;
    }

    return array;
  }

  const optionClickHandler = (correctFlag) => {
    if (correctFlag === true) {
      setScore(score + 1);
    }

    const nextQuestion = (activeQuestion + 1) % shuffledQuestions.length;
    shuffle(shuffledQuestions[nextQuestion].options);
    setActiveQuestion(nextQuestion);
  };

  const updateHighScore = () => {
    let username = prompt("To save your score please enter your username");
    if (username) {
      if (highscores[0].score === -1) {
        highscores.pop();
        highscores.pop();
      }

      highscores.push({ score: score, username: username });
    }
  };

  return (
    <>
      {shuffledQuestions ? (
        <div className="game">
          <Timer
            handleExpire={() => {
              updateHighScore();
            }}
          />
          <span className="game-score">Score: {score}</span>
          <span className="question">
            {shuffledQuestions[activeQuestion].title}
          </span>
          <FourSquare
            options={shuffledQuestions[activeQuestion].options}
            handleClick={optionClickHandler}
          />
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
}
export { Game, highscores };
