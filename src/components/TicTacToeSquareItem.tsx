import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

const TIC_TAC_TOE_BOARD_SIZE = Dimensions.get('screen').width * 0.7;
const SQUARE_SIZE = TIC_TAC_TOE_BOARD_SIZE / 3;

interface Props {
  value: string;
  onPressSquare: (position: number) => void;
  position: number;
}

const TicTacToeSquareItem = ({onPressSquare, position, value}: Props) => {
  const onPressSquareHandler = () => {
    onPressSquare(position);
  };

  return (
    <TouchableOpacity style={styles.square} onPress={onPressSquareHandler}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  squareText: {
    fontSize: 24,
  },
});

export default TicTacToeSquareItem;
