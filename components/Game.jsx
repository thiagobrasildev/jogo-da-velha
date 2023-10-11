import React from "react";
import Grid from "./Grid";
import { useGlobalContext } from "@/context/user";

const Game = () => {
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

  return (
    <main className="flex flex-col w-full min-h-screen items-center justify-start">
      <section className="flex w-full h-full">
        <div className="bg-green-500 flex flex-col w-[20%] min-h-[80vh] rounded-br-2xl">
          <div className="flex w-full items-center flex-col">
            <h2 className="text-white text-xl font-bold p-4">Jogador 1</h2>
            <p className="text-lg">{playerOne}</p>
          </div>
          <div className="flex w-full justify-center pt-10 text-xl font-bold">
            <span>{countOne}</span>
            <span>-</span>
            <span>{countTwo}</span>
          </div>
          <div className="flex w-full justify-center pt-10 text-xl font-bold">
            {turn === 1 && <span>Sua vez!</span>}
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center relative">
          <Grid />
        </div>

        <div className="bg-yellow-500 flex flex-col w-[20%] min-h-[80vh] rounded-bl-2xl">
          <div className="flex w-full items-center flex-col">
            <h2 className="text-white text-xl font-bold p-4">Jogador 2</h2>
            <p className="text-lg">{playerTwo}</p>
          </div>
          <div className="flex w-full justify-center pt-10 text-xl font-bold">
            <span>{countTwo}</span>
            <span>-</span>
            <span>{countOne}</span>
          </div>
          <div className="flex w-full justify-center pt-10 text-xl font-bold">
            {turn === 2 && <span>Sua vez!</span>}
          </div>
        </div>
      </section>
      <footer className="flex flex-1 justify-center items-center p-10">
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-700 rounded-md py-3 px-10 text-white font-bold hover:bg-blue-600 transition-colors ease-in duration-100"
        >
          Recomeçar
        </button>
      </footer>
    </main>
  );
};

export default Game;
