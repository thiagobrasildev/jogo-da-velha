"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { winningCombinations } from "../utils/winningCombinations";

const Grid = () => {
  const [grid, setGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [winnerCombo, setWinnerCombo] = useState(null);

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
    checkWinner();
    checkGameEnded();
  }, [grid]);

  useEffect(() => {
    if (winnerCombo) {
      alert(`vencedor ${winnerCombo}`);
    }
  }, [winnerCombo]);

  const checkGameEnded = () => {
    if (grid.every((item) => item !== 0)) {
      alert("Jogo acabou, deu velha!");
    }
  };

  const checkWinner = () => {
    let winner = null;

    for (let values of winningCombinations) {
      if (
        grid[values[0]] === 1 &&
        grid[values[1]] === 1 &&
        grid[values[2]] === 1
      ) {
        winner = "player 1";
      }

      if (
        grid[values[0]] === 2 &&
        grid[values[1]] === 2 &&
        grid[values[2]] === 2
      ) {
        winner = "player 2";
      }

      if (winner) {
        setWinnerCombo(winner);
        break;
      }
    }
  };

  return (
    <section className="w-full h-full grid grid-cols-3 py-10 px-16">
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
