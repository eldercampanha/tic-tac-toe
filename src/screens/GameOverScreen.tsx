import React from 'react';
import {Text} from 'react-native';
import {GameResult} from '../hooks/useTicTacToeResult';

interface Props {
  result: GameResult;
}

const GameOverScreen = ({result}: Props) => (
  <Text>Game Over Screen: {result}</Text>
);

export default GameOverScreen;
