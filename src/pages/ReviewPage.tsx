import { useState, useEffect } from "react";
import { Seo } from "@/components/seo/Seo";
import { Shuffle, RotateCcw, Home, Gamepad2 } from "lucide-react";

interface GameInfo {
  file: string;
  name: string;
  nameDe: string;
  description: string;
}

const games: GameInfo[] = [
  {
    file: "/games/flappy-bird.html",
    name: "Flappy Bird",
    nameDe: "Flappy Bird",
    description: "Flieg durch die Rohre und sammle Punkte!",
  },
  {
    file: "/games/pinball.html",
    name: "Pinball",
    nameDe: "Pinball",
    description: "Klassisches Flipper-Arcade-Spiel mit bunten Lichtern.",
  },
  {
    file: "/games/runner.html",
    name: "Runner",
    nameDe: "Runner",
    description: "Renne, springe und weiche den Hindernissen aus!",
  },
  {
    file: "/games/speed-tap.html",
    name: "Speed Tap",
    nameDe: "Speed Tap",
    description: "Teste deine Reaktionsgeschwindigkeit!",
  },
  {
    file: "/games/survive.html",
    name: "Survive",
    nameDe: "Survive",
    description: "Überlebe so lange wie möglich!",
  },
  {
    file: "/games/tile-master.html",
    name: "Tile Master",
    nameDe: "Tile Master",
    description: "Ein süchtig machendes Puzzlespiel!",
  },
];

export default function ReviewPage() {
  const [currentGame, setCurrentGame] = useState<GameInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const pickRandomGame = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * games.length);
    setCurrentGame(games[randomIndex]);
    // Simulate loading for smooth transition
    setTimeout(() => setIsLoading(false), 400);
  };

  useEffect(() => {
    pickRandomGame();
  }, []);

  return (
    <>
      <Seo
        title="Game Review | VSCommission"
        description="Entdecken Sie zufällige Mini-Spiele. Jeder Besuch bringt ein neues Spielerlebnis!"
        keywords="Spiele, Game, Arcade, Mini-Spiele"
        path="/review"
      />

      <div className="min-h-screen bg-primary-900 flex flex-col">
        {/* Top Bar */}
        <header className="bg-primary-950/80 backdrop-blur-md border-b border-primary-800 px-4 lg:px-8 py-3 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center text-white shadow-lg">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-white font-heading font-bold text-base leading-tight">
                VSCommission Game Review
              </h1>
              <p className="text-primary-300 text-xs">
                Zufälliges Spiel bei jedem Besuch
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={pickRandomGame}
              className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg bg-accent hover:bg-accent-600 text-white text-sm font-semibold transition-colors"
            >
              <Shuffle className="w-4 h-4" />
              <span className="hidden sm:inline">Neues Spiel</span>
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg bg-primary-800 hover:bg-primary-700 text-white text-sm font-semibold transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Startseite</span>
            </a>
          </div>
        </header>

        {/* Game Info Bar */}
        {currentGame && (
          <div className="bg-primary-800/50 px-4 lg:px-8 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span className="px-2 py-0.5 rounded-md bg-accent/20 text-accent-300 text-xs font-semibold">
                {isLoading ? "Lädt..." : "Spielt jetzt"}
              </span>
              <span className="text-white font-medium">{currentGame.nameDe}</span>
              <span className="text-primary-300 text-xs hidden md:inline">
                {currentGame.description}
              </span>
            </div>
            <span className="text-primary-400 text-xs">
              {games.findIndex((g) => g.file === currentGame.file) + 1} / {games.length}
            </span>
          </div>
        )}

        {/* Game Container */}
        <main className="flex-1 relative bg-primary-950">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-primary-950">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary-700 border-t-accent rounded-full animate-spin" />
                <p className="text-primary-300 text-sm">Lade zufälliges Spiel...</p>
              </div>
            </div>
          )}

          {currentGame && (
            <iframe
              key={currentGame.file}
              src={currentGame.file}
              title={currentGame.name}
              className="w-full h-full min-h-[calc(100vh-120px)] border-0"
              allow="autoplay; fullscreen; gamepad"
            />
          )}
        </main>

        {/* Footer Controls */}
        <footer className="bg-primary-950/80 border-t border-primary-800 px-4 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-primary-400 text-xs">
              © {new Date().getFullYear()} VSCommission · 6 Spiele verfügbar
            </p>
            <button
              onClick={pickRandomGame}
              className="inline-flex items-center gap-1.5 text-primary-300 hover:text-accent text-xs font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Spiel wechseln
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
