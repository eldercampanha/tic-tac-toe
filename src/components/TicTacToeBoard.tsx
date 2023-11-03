import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import TicTacToeSquareItem from './TicTacToeSquareItem';
import {Strings} from '../constants/strings';
import {Dimensions} from '../constants/dimensions';

interface Props {
  onPressSquare: (index: number) => void;
  boardState: string[];
  enabled: boolean;
}

const {infoTitleDisable, infoTitleEnabled} = Strings.en.gameScreen;
const {margin} = Dimensions;

const TicTacToeBoard = ({onPressSquare, boardState, enabled}: Props) => {
  const infoTitle = enabled ? infoTitleEnabled : infoTitleDisable;

  const renderSquare = ({item, index}: {item: string; index: number}) => (
    <TicTacToeSquareItem
      onPressSquare={onPressSquare}
      position={index}
      value={item}
    />
  );

  return (
    <>
      {
        <Text style={[styles.infoText, !enabled && styles.disabled]}>
          {infoTitle}
        </Text>
      }
      <View style={[styles.container, !enabled && styles.disabled]}>
        <FlatList<string>
          contentContainerStyle={styles.contentContainer}
          data={boardState}
          keyExtractor={(_, index: number) => index.toString()}
          renderItem={renderSquare}
          numColumns={3}
        />
      </View>
    </>
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
  infoText: {
    margin: margin.s,
    textAlign: 'center',
    color: 'blue',
  },
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none',
  },
});

export default TicTacToeBoard;
