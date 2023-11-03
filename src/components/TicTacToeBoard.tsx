import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import TicTacToeSquareItem from './TicTacToeSquareItem';
import {Strings} from '../constants/strings';
import {Dimensions} from '../constants/dimensions';
import TextView from './TextView';
import {Colors} from '../constants/colors';

interface Props {
  onPressSquare: (index: number) => void;
  boardState: string[];
  enabled: boolean;
  player: string;
  symbol: 'X' | 'O';
}

const {infoTitleDisable, infoTitleEnabled} = Strings.en.gameScreen;
const {margin} = Dimensions;

const TicTacToeBoard = ({
  onPressSquare,
  boardState,
  enabled,
  player,
  symbol,
}: Props) => {
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
      <View style={[styles.container, !enabled && styles.disabled]}>
        <View style={styles.headerContainer}>
          <TextView
            variant="title"
            textStyle={[styles.infoText, !enabled && styles.disabled]}>
            {infoTitle}
          </TextView>
          <TextView variant="body">{`${player} | ${symbol} `}</TextView>
        </View>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: margin.l,
  },
  contentContainer: {
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  infoText: {
    color: Colors.accentPrimary,
  },
  disabled: {
    color: Colors.primary,
    backgroundColor: Colors.background,
    opacity: 0.5,
    pointerEvents: 'none',
  },
});

export default TicTacToeBoard;
