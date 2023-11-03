import {useState, useEffect} from 'react';
import {winningCombinations} from '../constants/gameConstants';

export type GameResult = 'X' | 'O' | 'Draw' | null;
type BoardState = GameResult[];

function calculateWinner(turns: number, board: BoardState): GameResult {
  if (turns > 4) {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  }
  if (turns === 9) {
    return 'Draw';
  }

  return null;
}

export function useTicTacToeResult(
  turns: number,
  board: BoardState,
): GameResult {
  const [result, setResult] = useState<GameResult>(null);

  useEffect(() => {
    const winner = calculateWinner(turns, board);
    setResult(winner);
  }, [board, turns]);

  return result;
}
