import React from "react";
import styles from "./App.module.css";
import QuizButtons from "./Components/QuizButtons";
import QuizOptions from "./Components/QuizOptions";

import data from "./German-words-data.json";
import GameContext from "./Util/GameContext";

function App() {
  console.log("data :>> ", data[45]);

  return (
    <GameContext>
      <div className={styles.app}>
        <h1>Learn German</h1>
        <QuizButtons />
        <QuizOptions />
        <div>
          <p>hint</p>
          <h3>word</h3>
        </div>
        <div>
          <button>submit</button>
        </div>
      </div>
    </GameContext>
  );
}

export default App;
