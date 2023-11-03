import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {Strings} from '../constants/strings';

interface Props {
  onPressStart: () => void;
}

const {title, actionButton} = Strings.en.welcomeScreen;

const WelcomeScreen = ({onPressStart}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button onPress={onPressStart}>{actionButton}</Button>
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
});

export default WelcomeScreen;
