import React from 'react';
import {Text} from 'react-native';
import {GameResult} from '../hooks/useTicTacToeResult';
import Button from '../components/Button';
import {Strings} from '../constants/strings';

interface Props {
  result: GameResult;
  resetGame: () => void;
}

const {title, actionButton} = Strings.en.gameOverScreen;

const GameOverScreen = ({result, resetGame}: Props) => (
  <>
    <Text>{`${title}: ${result}`}</Text>
    <Button onPress={resetGame}>{actionButton}</Button>
  </>
);

export default GameOverScreen;
