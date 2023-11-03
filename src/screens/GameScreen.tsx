import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTicTacToeResult} from '../hooks/useTicTacToeResult';
import TicTacToeBoard from '../components/TicTacToeBoard';
import GameOverScreen from './GameOverScreen';

export interface Player {
  id: number;
  symbol: 'X' | '0';
}

export const p1: Player = {
  id: 0,
  symbol: 'X',
};

export const p2: Player = {
  id: 1,
  symbol: '0',
};

const GameScreen = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(p1);
  const [turns, setTurns] = useState(0);
  const result = useTicTacToeResult(turns, boardState);
  const [isGameOver, setIsGameOver] = useState(false);

  const resetGame = () => {
    setBoardState(Array(9).fill(''));
    setTurns(0);
  };

  useEffect(() => {
    if (result) {
      setIsGameOver(true);
    }
  }, [result]);

  const handleSquarePress = (index: number) => {
    if (!boardState[index]) {
      setBoardState(currentBoardState => {
        const newBoardState = [...currentBoardState];
        newBoardState[index] = currentPlayer.symbol;
        return newBoardState;
      });
      setCurrentPlayer(currentPlayer.id === 0 ? p2 : p1);
      setTurns(curr => curr + 1);
    }
  };

  if (isGameOver) {
    return <GameOverScreen result={result} />;
  }

  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
      <View style={styles.board}>
        <TicTacToeBoard
          boardState={boardState}
          onPressSquare={handleSquarePress}
        />
      </View>
      <View style={styles.board}>
        <TicTacToeBoard
          boardState={boardState}
          onPressSquare={handleSquarePress}
        />
      </View>
    </View>
  );
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
  buttonContainer: {
    margin: 8,
    borderColor: 'blue',
    borderRadius: 8,
    borderWidth: 2,
  },
  buttonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default GameScreen;
