import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Dimensions} from '../constants/dimensions';

interface Props {
  onPressStart: () => void;
}

const {margin, borderRadius} = Dimensions;

const WelcomeScreen = ({onPressStart}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Multi TicTacToe simulation!</Text>
      <Pressable style={styles.buttonContainer} onPress={onPressStart}>
        <Text style={styles.buttonTitle}>Start Game</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    margin: margin.l,
    borderColor: 'blue',
    borderRadius: borderRadius.l,
    borderWidth: borderRadius.s,
  },
  buttonTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: margin.s,
    paddingHorizontal: margin.m,
  },
});

export default WelcomeScreen;
