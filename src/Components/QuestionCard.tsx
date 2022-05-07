import React, { useState } from "react";
import { wordObjectInterface } from "../Util/GameContext";
import "./QuestionCardStyle.css";

interface QuestionCardInterface extends wordObjectInterface {
  nextQuestionFunc: any;
}

export default function QuestionCard({
  Artikel,
  Meaning,
  Plural,
  word,
  nextQuestionFunc,
}: QuestionCardInterface) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);

  function submitAnswer() {
    if (userAnswer === "") return;
    setShowNextQuestionButton(true);
    if (userAnswer === Artikel) {
      setIsCorrect("right");
    } else {
      setIsCorrect("wrong");
    }
  }

  function getNextQuestion() {
    nextQuestionFunc(isCorrect);
    setUserAnswer("");
    setIsCorrect("");
    setShowAnswer(false);
    setShowNextQuestionButton(false);
    setShowHint(false);
  }

  return (
    <div>
      <div className="quizOptionsWrapper">
        <button
          onClick={() => {
            setUserAnswer("Der");
          }}
          className={`quizButton DerButton ${userAnswer}`}
        >
          Der
        </button>

        <button
          onClick={() => {
            setUserAnswer("Die");
          }}
          className={`quizButton DieButton ${userAnswer}`}
        >
          Die
        </button>

        <button
          onClick={() => {
            setUserAnswer("Das");
          }}
          className={`quizButton DasButton ${userAnswer}`}
        >
          Das
        </button>
      </div>

      <div className="quizWordWrapper">
        <div className="hintWrapper">
          <div>
            <button
              onClick={() => {
                setShowHint((prv) => !prv);
              }}
            >
              Show Hint
            </button>
            {showHint && <span className="hintShow">{Meaning}</span>}
          </div>

          <br />
          <div>
            <button
              onClick={() => {
                setShowAnswer((prv) => !prv);
              }}
            >
              Show Answer
            </button>
            {showAnswer && <span>{Artikel}</span>}
          </div>
        </div>
        <h3>{word}</h3>
      </div>
      <div className="answerDivWrapper">
        <div>user answer: {userAnswer}</div>
        <div>
          <button disabled={!userAnswer} onClick={submitAnswer}>
            submit
          </button>
        </div>

        {isCorrect === "right" && <div>you are correct</div>}
        {isCorrect === "wrong" && (
          <div>WRONG! the correct answer is {Artikel}</div>
        )}
        <div>
          {showNextQuestionButton && (
            <button onClick={getNextQuestion}>next Question</button>
          )}
        </div>
      </div>
    </div>
  );
}
