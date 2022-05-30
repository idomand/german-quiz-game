import React, { useState } from "react";
import ArtikelGame from "./Components/ArtikelGame";
import "./App.scss";
import { useTheme } from "./Util/ThemeContext";
import DarkMoodButton from "./Components/DarkMoodButton";

export default function App() {
  const [gameType, setGameType] = useState<string | null>("artikel");
  const { themeColor } = useTheme();

  return (
    <main className={`app ${themeColor}`}>
      <header>
        <h1>German Word Games</h1>
        <DarkMoodButton />
      </header>
      <div className="gamePickerWrapper">
        <h2>What game would you like to play?</h2>
        <button
          className="appButton"
          onClick={() => {
            setGameType("artikel");
          }}
        >
          Artikel Game
        </button>
        <button
          className="appButton"
          onClick={() => {
            setGameType("time");
          }}
        >
          Time Game
        </button>
      </div>

      {gameType === "artikel" && <ArtikelGame />}
      {gameType === "time" && <p>time game</p>}
    </main>
  );
}
