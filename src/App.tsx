import React, { useState, useEffect } from "react";
import data from "./German-words-data.json";
import { wordInterface, DummyWordObject } from "./Util/wordObjectInterface";
import "./App.scss";
import QuestionCard from "./Components/QuestionCard";

export default function App() {
  const [isGameOver, setIsGameOver] = useState(true);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionsArray, setQuestionsArray] = useState<wordInterface[]>([
    DummyWordObject,
  ]);

  const [question, setQuestion] = useState<wordInterface>(DummyWordObject);

  function startNewGame() {
    setScore(0);
  }

  function startGameFunc(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsGameOver(false);
    setScore(0);
    setQuestionNumber(0);
    getQuestions();
    setQuestion(questionsArray[questionNumber]);
  }

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfQuestions]);

  async function getQuestions() {
    let randomNumber = Math.floor(Math.random() * 1000);
    let newArray = [];
    for (let i = randomNumber; i < randomNumber + numberOfQuestions; i++) {
      newArray.push(data[i]);
    }
    setQuestionsArray(newArray);
  }

  function getNextQuestion() {
    if (questionNumber + 1 === numberOfQuestions) {
      setIsGameOver(true);
    } else {
      setQuestionNumber((prv) => prv + 1);
      setQuestion(questionsArray[questionNumber]);
    }
  }

  function updateScore(userAnswer: string) {
    if (userAnswer === "right") {
      setScore((prv) => prv + 1);
    }
  }

  if (isGameOver && score === 0) {
    return (
      <main className="app">
        <section className="preGameScreen">
          <form onSubmit={startGameFunc}>
            <label htmlFor="numberOfQuestions">
              Pick Number Of Questions:
              <input
                id="umberOfQuestions"
                min={0}
                max={20}
                type="number"
                value={numberOfQuestions}
                onChange={(e) => {
                  setNumberOfQuestions(+e.target.value);
                }}
              />
            </label>
            <button disabled={!numberOfQuestions}>start Game</button>
          </form>
        </section>
      </main>
    );
  } else if (isGameOver && score > 0) {
    return (
      <div>
        <h1>game over</h1>
        <h5>your score is {score}</h5>

        <p>Would You Like To Play Again?</p>
        <button onClick={startNewGame}>New Game</button>
      </div>
    );
  } else {
    return (
      <main className="app">
        <div className="score">
          <div>Score: {score}</div>
          <div>
            Question: {questionNumber + 1} /{numberOfQuestions}
          </div>
        </div>

        {!isGameOver && question && questionNumber < numberOfQuestions && (
          <QuestionCard
            getNextQuestion={getNextQuestion}
            updateScore={updateScore}
            Artikel={question?.Artikel}
            Meaning={question?.Meaning}
            Plural={question?.Plural}
            word={question?.word}
          />
        )}
      </main>
    );
  }
}
