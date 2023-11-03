import {useState, useEffect} from 'react';
import {winningCombinations} from '../constants/gameConstants';
import {Player} from '../types/Player';
import {Strings} from '../constants/strings';

export type GameResult = 'X' | 'O' | 'Draw' | null;

type BoardState = GameResult[];

const {messageDraw, messageWinner} = Strings.en.useTicTacToeResult;

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

interface Result {
  result: GameResult;
  message: string;
}

export function useTicTacToeResult(
  turns: number,
  board: BoardState,
  players: Player[],
): Result {
  const [result, setResult] = useState<GameResult>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const winner = calculateWinner(turns, board);
    setResult(winner);
    if (result === 'Draw') {
      setMessage(messageDraw);
    } else {
      setMessage(
        '🎉 ' +
          messageWinner +
          players.find(p => p.symbol === result)?.name +
          ' 🎉',
      );
    }
  }, [board, players, result, turns]);

  return {result, message};
}
