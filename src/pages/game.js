import React, { useState } from "react";
import { Timer } from "../components/timer";
import "../styles.css";
import {questions} from "../questions.js"

export default function Game() {

  const [activeQuestion, setActiveQuestion] = useState(0);
	const [score, setScore] = useState(0);

	const optionClickHandler = (correctFlag) => {
		if (correctFlag == true) {
			setScore(score + 1);
		}

		const nextQuestion = activeQuestion + 1;
		if (nextQuestion < questions.length) {
			setActiveQuestion(nextQuestion);
		}
	};
    return (
      <div className="game">
        <Timer />
        <span className="game-score">Score: {score}</span>
        <span className="question">{questions[activeQuestion].title}</span>
        <div class="foursquare">
          {questions[activeQuestion].options.map((answerOption) => (
                <button style={{backgroundColor: answerOption.color}} onClick={() => optionClickHandler(answerOption.correctFlag)}>{answerOption.title}</button>
              ))}
        </div>
      </div>
    );
}
