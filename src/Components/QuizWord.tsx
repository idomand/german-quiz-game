import React from "react";
import styles from "./QuizWordStyle.module.css";

export default function QuizWord() {
  return (
    <div className={styles.quizWordWrapper}>
      <div className={styles.hintWrapper}>
        <p className={styles.hintPlaceholder}>hintPlaceholder</p>
        <span className={styles.hintShow}>hintShow</span>
      </div>
      <h3>word</h3>
    </div>
  );
}
