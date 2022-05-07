import React, { useContext, useEffect, useState } from "react";
import data from "../German-words-data.json";

interface GameContextInterface {
  wordsArray: wordObjectInterface[] | null;
  setWordsArray: any;
  // isLoading: boolean;
  // setIsLoading: any;
}

export interface wordObjectInterface {
  Artikel: string;
  Meaning: string;
  Plural: string;
  word: string;
}

const GameContextProvider = React.createContext<GameContextInterface | null>(
  null
);

export function useGame() {
  return useContext(GameContextProvider);
}

export default function GameContext({ children }: any) {
  const [wordsArray, setWordsArray] = useState<wordObjectInterface[] | null>(
    null
  );

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 1000);
    let newArray = [];
    for (let i = randomNumber; i < randomNumber + 15; i++) {
      newArray.push(data[i]);
    }
    setWordsArray(newArray);
  }, []);

  const value = {
    wordsArray,
    setWordsArray,
  };

  return (
    <GameContextProvider.Provider value={value}>
      {children}
    </GameContextProvider.Provider>
  );
}
