"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  playerOne: null,
  setPlayerOne: () => null,
  playerTwo: null,
  setPlayerTwo: () => null,
  newGame: false,
  setNewGame: () => null,
  countOne: 0,
  setCountOne: () => 0,
  countTwo: 0,
  setCountTwo: () => 0,
  turn: 1,
  setTurn: () => 1,
});

export const GlobalContextProvider = ({ children }) => {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [newGame, setNewGame] = useState(false);
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [turn, setTurn] = useState(1);

  return (
    <GlobalContext.Provider
      value={{
        playerOne,
        setPlayerOne,
        playerTwo,
        setPlayerTwo,
        newGame,
        setNewGame,
        countOne,
        setCountOne,
        countTwo,
        setCountTwo,
        turn,
        setTurn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
