import React, { useState, useEffect } from "react";
import { Timer } from "../components/timer";
import "../styles.css";
import { questions } from "../questions.js";
import { FourSquare } from "../components/foursquare";

export default function Game() {
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
  return (
    <>
      {shuffledQuestions ? (
        <div className="game">
          <Timer />
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
