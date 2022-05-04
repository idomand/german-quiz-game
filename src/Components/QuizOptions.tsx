import React from "react";
import styles from "./QuizOptionsStyle.module.css";

export default function QuizOptions() {
  return (
    <div className={styles.quizOptionsWrapper}>
      <div>
        <button className={styles.DerButton}>Der</button>
      </div>
      <div>
        <button className={styles.DieButton}>Die</button>
      </div>
      <div>
        <button className={styles.DasButton}>Das</button>
      </div>
    </div>
  );
}
