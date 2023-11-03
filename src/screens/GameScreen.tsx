import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTicTacToeResult} from '../hooks/useTicTacToeResult';
import TicTacToeBoard from '../components/TicTacToeBoard';
import GameOverScreen from './GameOverScreen';
import {Player} from '../types/Player';

const INITIAL_BOARD_STATE = Array(9).fill('');

const p1: Player = {id: 0, name: 'Player 1', symbol: 'X'};
const p2: Player = {id: 1, name: 'Player 2', symbol: 'O'};
const players = [p1, p2];

const GameScreen = () => {
  const [boardState, setBoardState] = useState(INITIAL_BOARD_STATE);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(p1);
  const [turns, setTurns] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const result = useTicTacToeResult(turns, boardState);

  useEffect(() => {
    if (result) {
      setIsGameOver(true);
    }
  }, [result]);

  const resetGameHandler = useCallback(() => {
    setBoardState(INITIAL_BOARD_STATE);
    setCurrentPlayer(p1);
    setIsGameOver(false);
    setTurns(0);
  }, []);

  const handleSquarePress = useCallback(
    (index: number) => {
      if (!boardState[index]) {
        setBoardState(currentBoardState => {
          const newBoardState = [...currentBoardState];
          newBoardState[index] = currentPlayer.symbol;
          return newBoardState;
        });
        setCurrentPlayer(currentPlayer.id === p1.id ? p2 : p1);
        setTurns(curr => curr + 1);
      }
    },
    [boardState, currentPlayer.id, currentPlayer.symbol],
  );

  const renderBoard = (player: Player) => (
    <View key={player.id} style={styles.board}>
      <TicTacToeBoard
        enabled={currentPlayer.id === player.id}
        boardState={boardState}
        onPressSquare={handleSquarePress}
      />
    </View>
  );

  if (isGameOver) {
    return <GameOverScreen result={result} resetGame={resetGameHandler} />;
  }

  return <View style={styles.container}>{players.map(renderBoard)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  board: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GameScreen;
