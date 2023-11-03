import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {Colors} from '../constants/colors';

interface Props {
  children: React.ReactNode;
  variant: 'title' | 'body' | 'subtitle';
  textStyle?: StyleProp<TextStyle>;
}

const TextView = ({children, textStyle, variant}: Props) => (
  <Text style={[styles.shared, styles[variant], textStyle]}>{children}</Text>
);

const styles = StyleSheet.create({
  shared: {
    color: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '300',
  },
});

export default TextView;
