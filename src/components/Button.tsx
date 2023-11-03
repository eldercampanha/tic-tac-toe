import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Dimensions} from '../constants/dimensions';

const {margin, borderRadius} = Dimensions;

interface Props {
  onPress: () => void;
  children: React.ReactNode;
}

const Button = ({onPress, children}: Props) => (
  <Pressable style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonTitle}>{children}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
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

export default Button;
