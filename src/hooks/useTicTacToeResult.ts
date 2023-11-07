import {useState, useEffect} from 'react';
import {winningCombinations} from '../constants/gameConstants';
import {Player, Symbol} from '../types/Player';
import {Strings} from '../constants/strings';
import {GameResult} from '../types/GameResult';

const {messageDraw, messageWinner} = Strings.en.useTicTacToeResult;

function calculateWinner(turns: number, board: Symbol[]): GameResult {
  if (turns > 4) {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  }
  if (
    board.filter(item => Object.values(Symbol).includes(item as Symbol))
      .length === 9
  ) {
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
  board: Symbol[],
  players: Player[],
): Result {
  const [result, setResult] = useState<GameResult>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const winner = calculateWinner(turns, board);
    setResult(winner);
  }, [board, players.length, turns]);

  useEffect(() => {
    if (result) {
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
    }
  }, [players, result]);

  return {result, message};
}
