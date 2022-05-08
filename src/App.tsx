import React, { useState } from "react";
import "./App.scss";
import QuestionCard from "./Components/QuestionCard";
import { useGame, wordObjectInterface } from "./Util/GameContext";

function App() {
  const { wordsArray } = useGame()!;
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [question, setQuestion] = useState<wordObjectInterface | null>(null);

  async function startQuiz() {
    setGameOver(false);
    setScore(0);
    setQuestionNumber(0);
    if (!wordsArray) return;
    setQuestion(wordsArray[questionNumber]);
  }

  function nextQuestionFunc(answer: string) {
    if (answer === "right") {
      setScore((prv) => prv + 1);
    }
    if (!wordsArray) return;
    setQuestion(wordsArray[questionNumber + 1]);
    setQuestionNumber((prv) => prv + 1);
  }

  return (
    <div className="app">
      {gameOver && <button onClick={startQuiz}>start game</button>}
      {!gameOver && <div className="score">score:{score}</div>}
      {!gameOver && question && questionNumber < 9 && (
        <div>
          <QuestionCard
            nextQuestionFunc={nextQuestionFunc}
            Artikel={question?.Artikel}
            Meaning={question?.Meaning}
            Plural={question?.Plural}
            word={question?.word}
          />
        </div>
      )}
    </div>
  );
}

export default App;
