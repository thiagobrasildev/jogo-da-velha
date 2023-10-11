import Grid from "@/components/Grid";
import React from "react";

const Game = () => {
  return (
    <main className="flex flex-col w-full min-h-screen items-center justify-start">
      <section className="flex w-full h-full">
        <div className="bg-green-500 flex flex-col w-[20%] min-h-[90vh] rounded-br-2xl">
          <div className="flex w-full items-center flex-col">
            <h2 className="text-white text-xl font-bold p-4">Player 1</h2>
            <p className="text-lg">João</p>
          </div>
          <div className="flex w-full justify-center pt-10 text-xl font-bold">
            <span>0</span>
            <span>-</span>
            <span>0</span>
          </div>
        </div>

        <div className="flex flex-1 min-h-[90vh]">
          <Grid />
        </div>

        <div className="bg-yellow-500 flex flex-col w-[20%] min-h-[90vh] rounded-bl-2xl">
          <div className="flex w-full items-center flex-col">
            <h2 className="text-white text-xl font-bold p-4">Player 2</h2>
            <p className="text-lg">Pedro</p>
          </div>
          <div className="flex w-full justify-center pt-10 text-xl font-bold">
            <span>0</span>
            <span>-</span>
            <span>0</span>
          </div>
        </div>
      </section>
      <footer className="flex flex-1 justify-center items-center">
        <button className="bg-blue-700 rounded-md py-3 px-10 text-white font-bold hover:bg-blue-600 transition-colors ease-in duration-100">
          Recomeçar
        </button>
      </footer>
    </main>
  );
};

export default Game;
