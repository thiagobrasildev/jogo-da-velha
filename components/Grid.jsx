"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { winningCombinations } from "../constants/winningCombinations";
import { useGlobalContext } from "@/context/user";

const Grid = () => {
  const [grid, setGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [winnerCombo, setWinnerCombo] = useState(null);
  const [gameTied, setGameTied] = useState(null);
  const [rotate, setRotate] = useState(0);
  const {
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
  } = useGlobalContext();

  const handleClick = (clickedIndex) => {
    if (grid[clickedIndex] !== 0) {
      return;
    }

    if (winnerCombo) {
      return;
    }

    setGrid((prev) => {
      const newGrid = [...prev];
      newGrid[clickedIndex] = turn;
      return newGrid;
    });

    setTurn((prev) => (prev === 1 ? 2 : 1));
  };

  useEffect(() => {
    checkGameEnded();
    checkWinner();
  }, [grid]);

  useEffect(() => {
    if (winnerCombo) {
      alert(`vencedor ${winnerCombo}`);
      setGrid([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setWinnerCombo(null);
    }

    if (gameTied) {
      setGrid([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setGameTied(null);
    }
  }, [winnerCombo, gameTied]);

  const checkWinner = () => {
    let winner = null;

    for (let combination of winningCombinations) {
      const { indexes } = combination;

      if (grid[indexes[0]] === 1 && grid[indexes[1]] === 1 && grid[indexes[2]] === 1) {
        winner = playerOne;
        setCountOne(countOne + 1);
      }

      if (grid[indexes[0]] === 2 && grid[indexes[1]] === 2 && grid[indexes[2]] === 2) {
        winner = playerTwo;
        setCountTwo(countTwo + 1);
      }

      if (winner) {
        setWinnerCombo(winner);
        break;
      }
    }
  };

  const checkGameEnded = () => {
    if (grid.every((item) => item !== 0)) {
      setGameTied(true);
    }
  };

  const handleRotate = () => {
    setRotate((prev) => (prev === 0 ? 90 : 0));
  };

  return (
    <section
      className={`w-full max-w-[600px] h-full max-h-[600px] grid grid-cols-3 py-10 px-16 rotate-[${rotate}deg] transition-all duration-500`}
      onClick={() => {
        handleRotate();
      }}
    >
      {grid.map((square, index) => (
        <span
          onClick={() => {
            handleClick(index);
          }}
          key={index}
          className="flex flex-1 justify-center items-center border border-gray-500 cursor-pointer hover:bg-gray-100"
        >
          {square === 1 && (
            <Image
              src="./x.svg"
              alt="x simbol"
              width={50}
              height={50}
              className="absolute"
            />
          )}
          {square === 2 && (
            <Image
              src="./circle.svg"
              alt="circle simbol"
              width={60}
              height={60}
              className="absolute"
            />
          )}
        </span>
      ))}
    </section>
  );
};

export default Grid;
