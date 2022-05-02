import React, { useContext, useEffect, useState } from "react";

interface GameContextInterface {
  wordsArray: wordObjectInterface[];
  setWordsArray: any;
  wordObject: wordObjectInterface | null;
  setWordObject: any;
  isLoading: boolean;
  setIsLoading: any;
}

interface wordObjectInterface {
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
  const [wordsArray, setWordsArray] = useState([]);
  const [wordObject, setWordObject] = useState<wordObjectInterface | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  const value = {
    wordsArray,
    setWordsArray,
    wordObject,
    setWordObject,
    isLoading,
    setIsLoading,
  };

  return (
    <GameContextProvider.Provider value={value}>
      {children}
    </GameContextProvider.Provider>
  );
}
