"use client";

import Game from "@/components/Game";
import NewGame from "@/components/NewGame";
import { useGlobalContext } from "@/context/user";

export default function Home() {
  const { newGame, setNewGame } = useGlobalContext();

  return (
    <main className="w-full sm:h-screen flex items-center justify-center">
      {newGame === false ? <NewGame /> : <Game />}
    </main>
  );
}
