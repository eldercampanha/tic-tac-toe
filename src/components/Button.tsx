import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Dimensions} from '../constants/dimensions';
import {Colors} from '../constants/colors';

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
    borderRadius: borderRadius.l,
    overflow: 'hidden',
  },
  buttonTitle: {
    backgroundColor: Colors.successPositive,
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: margin.xl,
    paddingVertical: margin.l,
  },
});

export default Button;
