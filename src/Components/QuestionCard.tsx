import React from "react";
import { wordObjectInterface } from "../Util/GameContext";
import styles from "./QuestionCardStyle.module.css";
interface Props {
  value: string;
  number: number;
}

export default function QuestionCard({
  Artikel,
  Meaning,
  Plural,
  word,
}: wordObjectInterface) {
  return (
    <div>
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

      <div className={styles.quizWordWrapper}>
        <div className={styles.hintWrapper}>
          <span className={styles.hintShow}>{Meaning}</span>
        </div>
        <h3>{word}</h3>
      </div>
      <h5>{Artikel}</h5>
    </div>
  );
}
