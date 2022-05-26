import React from "react";
import ArtikelGame from "./Components/ArtikelGame";
import "./App.scss";
import { useTheme } from "./Util/ThemeContext";
import DarkMoodButton from "./Components/DarkMoodButton";

export default function App() {
  const { themeColor } = useTheme();

  return (
    <main className={`app ${themeColor}`}>
      <DarkMoodButton />
      <ArtikelGame />
    </main>
  );
}
