"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      name: "ApeType",
      url: "https://apetype.vercel.app",
      description:
        "ApeType is like MonkeyType, a typing speed and accuracy game.",
      icon: "⌨️",
    },

    {
      name: "KeyBr",
      url: "https://www.keybr.com",
      description: "KeyBr helps improve your typing with adaptive exercises.",
      icon: "🎯",
    },
    {
      name: "CheckIO",
      url: "https://js.checkio.org/",
      description: "CheckIO is a platform for learning and practicing coding.",
      icon: "🔍",
    },
    {
      name: "Grid Garden",
      url: "https://cssgridgarden.com/",
      description: "Grid Garden is a game for learning CSS Grid.",
      icon: "🌿",
    },
    {
      name: "Flexbox Froggy",
      url: "https://flexboxfroggy.com/",
      description: "Flexbox Froggy is a game for learning CSS Flexbox.",
      icon: "🐸",
    },
  ];

  const handleGameSelect = (url: string) => {
    setSelectedGame(url);
  };

  const handleBackToGames = () => {
    setSelectedGame(null);
  };

  if (selectedGame) {
    return (
      <div className="relative w-full h-full">
        <Button
          onClick={handleBackToGames}
          className="absolute top-4 left-4 z-10"
        >
          Back to Games
        </Button>
        <iframe
          src={selectedGame}
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-3xl font-bold tracking-tight">Coding Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.name}
            className="border p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-background"
          >
            <div className="text-4xl mb-4">{game.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
            <p className="text-gray-600 mb-4">{game.description}</p>

            <Button
              onClick={() => handleGameSelect(game.url)}
              className="w-full"
            >
              Play {game.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
