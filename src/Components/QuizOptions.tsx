import React from "react";
import { useGame } from "../Util/GameContext";

export default function QuizOptions() {
  const { isLoading } = useGame()!;

  console.log("isLoading :>> ", isLoading);
  return (
    <div>
      QuizOptions
      <div>
        <button>Der</button>
      </div>
      <div>
        <button>Die</button>
      </div>
      <div>
        <button>Das</button>
      </div>
    </div>
  );
}
