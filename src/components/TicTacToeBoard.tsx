import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import TicTacToeSquareItem from './TicTacToeSquareItem';

const TIC_TAC_TOE_BOARD_SIZE = Dimensions.get('screen').width * 0.7;
const SQUARE_SIZE = TIC_TAC_TOE_BOARD_SIZE / 3;

interface Props {
  onPressSquare: (index: number) => void;
  boardState: string[];
}

const TicTacToeBoard = ({onPressSquare, boardState}: Props) => {
  const renderSquare = ({item, index}: {item: string; index: number}) => (
    <TicTacToeSquareItem
      onPressSquare={onPressSquare}
      position={index}
      value={item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList<string>
        contentContainerStyle={styles.contentContainer}
        data={boardState}
        keyExtractor={(_, index: number) => index.toString()}
        renderItem={renderSquare}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
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

export default TicTacToeBoard;
