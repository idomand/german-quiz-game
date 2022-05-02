import React from "react";
import styles from "./QuizButtonsStyle.module.css";

export default function QuizButtons() {
  function startGame() {
    console.log("start");
  }

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={startGame}> Start </button>
    </div>
  );
}
