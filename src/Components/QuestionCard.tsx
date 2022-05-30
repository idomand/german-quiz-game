import React, { useState } from "react";
import { wordInterface } from "../Util/wordObjectInterface";
import "./QuestionCard.scss";

interface QuestionCardInterface extends wordInterface {
  getNextQuestion: any;
  updateScore: any;
}

export default function QuestionCard({
  Artikel,
  Meaning,
  Plural,
  word,
  getNextQuestion,
  updateScore,
}: QuestionCardInterface) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);

  function getNextQuestionFunc() {
    setUserAnswer("");
    setIsCorrect("");
    setCorrectAnswer("");
    setShowHint(false);
    getNextQuestion();
  }

  function checkAnswer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCorrectAnswer(Artikel);
    if (userAnswer === Artikel) {
      updateScore("right");
      setIsCorrect("true");
    } else {
      updateScore("wrong");
      setIsCorrect("false");
    }
  }

  return (
    <div>
      <div className="WordWrapper">
        <h2>
          The word is: <u>{word}</u>
        </h2>
        <h4>The plural is {Plural} </h4>
      </div>

      <form onSubmit={checkAnswer}>
        <button
          onClick={() => {
            setUserAnswer("Der");
          }}
          className={`quizButton DerButton ${userAnswer} ${
            correctAnswer === "Der" ? "rightAnswerDer" : ""
          } `}
        >
          Der
        </button>
        <button
          onClick={() => {
            setUserAnswer("Die");
          }}
          className={`quizButton DieButton ${userAnswer} ${
            correctAnswer === "Die" ? "rightAnswerDie" : ""
          }`}
        >
          Die
        </button>
        <button
          onClick={() => {
            setUserAnswer("Das");
          }}
          className={`quizButton DasButton ${userAnswer} ${
            correctAnswer === "Das" ? "rightAnswerDas" : ""
          }`}
        >
          Das
        </button>
      </form>

      <div className="hintWrapper">
        <button
          onClick={() => {
            setShowHint((prv) => !prv);
          }}
        >
          Show Hint
        </button>
        {showHint ? <span className="hintShow">{Meaning}</span> : <span></span>}
      </div>

      {isCorrect && (
        <div className="nextQuestionWrapper">
          <button onClick={getNextQuestionFunc}>Next Question</button>
        </div>
      )}
    </div>
  );
}
