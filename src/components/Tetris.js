import "./Tetris.css";

import Board from "./Board";
import GameController from "./GameController";
import GameStats from "./GameStats";
import Previews from "./Previews";
import Controls from "./Controls"; // Importiere die Controls-Komponente

import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="Tetris">
      <Controls /> {/* Füge die Controls-Komponente hinzu */}
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;
