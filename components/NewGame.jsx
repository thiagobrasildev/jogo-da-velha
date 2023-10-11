"use client";

import { useGlobalContext } from "@/context/user";
import React, { useEffect, useState } from "react";

const NewGame = () => {
  const [state, setState] = useState("newGame");
  const { playerOne, setPlayerOne, playerTwo, setPlayerTwo, newGame, setNewGame } =
    useGlobalContext();

  return (
    <div className="w-[50vw] h-[50vh] py-10 rounded-md border border-gray-600 px-4 flex flex-col items-center justify-center gap-11">
      <h1 className="text-5xl text-blue-500 font-bold">Jogo da Velha</h1>
      {state === "newGame" && (
        <button
          onClick={() => setState("playerOne")}
          className={`bg-blue-800 p-5 rounded-md text-white font-semibold text-lg hover:bg-blue-700 transition-colors ease-in duration-300`}
        >
          Começar nova partida
        </button>
      )}

      {state === "playerOne" && (
        <form className="flex flex-col items-center justify-center gap-3">
          <label className="text-base text-green-700">Jogador N1 digite seu nome:</label>
          <input
            type="text"
            className="border border-green-700 outline-none"
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
            maxLength={10}
            minLength={3}
            required
            autoFocus
          />
          <button
            onClick={() => playerOne && setState("playerTwo")}
            className="bg-green-700 text-white rounded-md p-2 hover:bg-green-600 transition-colors ease-in duration-100"
          >
            Continuar
          </button>
        </form>
      )}

      {state === "playerTwo" && (
        <form className="flex flex-col items-center justify-center gap-3" n>
          <label className="text-base text-yellow-700">Jogador N2 digite seu nome:</label>
          <input
            type="text"
            className="border border-yellow-700 outline-none"
            value={playerTwo}
            onChange={(e) => setPlayerTwo(e.target.value)}
            maxLength={10}
            minLength={3}
            required
            autoFocus
          />
          <button
            onClick={() => playerTwo && setNewGame(true)}
            className="bg-yellow-700 text-white rounded-md p-2 hover:bg-yellow-600 transition-colors ease-in duration-100"
          >
            Continuar
          </button>
        </form>
      )}
    </div>
  );
};

export default NewGame;
