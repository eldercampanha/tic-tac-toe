import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTicTacToeResult} from '../hooks/useTicTacToeResult';
import TicTacToeBoard from '../components/TicTacToeBoard';
import GameOverScreen from './GameOverScreen';
import {Player, Symbol} from '../types/Player';
import {Colors} from '../constants/colors';
import {Dimensions} from '../constants/dimensions';

const INITIAL_BOARD_STATE: Symbol[] = Array(9).fill('');

const p1: Player = {id: 0, name: 'Player 1', symbol: Symbol.X};
const p2: Player = {id: 1, name: 'Player 2', symbol: Symbol.O};
const p3: Player = {id: 2, name: 'Player 3', symbol: Symbol.Y};
const players = [p1, p2, p3];

const {margin} = Dimensions;

const GameScreen = () => {
  const [boardState, setBoardState] = useState(INITIAL_BOARD_STATE);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(p1);
  const [turns, setTurns] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  const {result, message} = useTicTacToeResult(turns, boardState, players);

  useEffect(() => {
    if (result) {
      setIsGameOver(true);
    }
  }, [result]);

  const resetGameHandler = useCallback(() => {
    setBoardState(INITIAL_BOARD_STATE);
    setCurrentPlayer(p1);
    setIsGameOver(false);
    setTurns(1);
  }, []);

  const handleSquarePress = useCallback(
    (index: number) => {
      if (!boardState[index]) {
        setBoardState(currentBoardState => {
          const newBoardState = [...currentBoardState];
          newBoardState[index] = currentPlayer.symbol;
          return newBoardState;
        });
        setCurrentPlayer(players[turns % players.length]);
        setTurns(curr => curr + 1);
      }
    },
    [boardState, currentPlayer, turns],
  );

  const renderBoard = (player: Player) => (
    <View key={player.id} style={styles.board}>
      <TicTacToeBoard
        player={player.name}
        symbol={player.symbol}
        enabled={currentPlayer.id === player.id}
        boardState={boardState}
        onPressSquare={handleSquarePress}
      />
    </View>
  );

  return (
    <>
      <View style={styles.container}>{players.map(renderBoard)}</View>
      <GameOverScreen
        isVisible={isGameOver}
        resultMessage={message}
        resetGame={resetGameHandler}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: margin.l,
    backgroundColor: Colors.background,
  },
  board: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: Colors.successPositive,
  },
});

export default GameScreen;
