import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import {Strings} from '../constants/strings';
import {Colors} from '../constants/colors';
import TextView from '../components/TextView';
import {Dimensions} from '../constants/dimensions';

interface Props {
  resetGame: () => void;
  isVisible: boolean;
  resultMessage: string;
}

const {title, actionButton} = Strings.en.gameOverScreen;
const {borderRadius} = Dimensions;

const GameOverScreen = ({resultMessage, resetGame, isVisible}: Props) => {
  return (
    <Modal transparent={true} animationType="none" visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TextView variant="title">{title}</TextView>
          <TextView variant="body">{resultMessage}</TextView>
          <Button onPress={resetGame}>{actionButton}</Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
  },
  modalView: {
    width: '80%',
    height: '30%',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
    borderRadius: borderRadius.l,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default GameOverScreen;
