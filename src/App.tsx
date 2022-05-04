import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import QuestionCard from "./Components/QuestionCard";
import { useGame, wordObjectInterface } from "./Util/GameContext";

function App() {
  const { wordsArray, isLoading, setIsLoading } = useGame()!;

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [question, setQuestion] = useState<wordObjectInterface | null>(null);

  async function startQuiz() {
    setIsLoading(true);
    setGameOver(false);
    setScore(0);
    setQuestionNumber(0);

    if (!wordsArray) return;

    setQuestion(wordsArray[questionNumber]);
  }

  return (
    <div className={styles.app}>
      {gameOver && <button onClick={startQuiz}>start game</button>}
      {!gameOver && <div className="score">score:{score}</div>}
      {!gameOver && question && questionNumber < 9 && (
        <div>
          main stuff
          <QuestionCard
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
