import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {Strings} from '../constants/strings';
import TextView from '../components/TextView';
import {Dimensions} from '../constants/dimensions';

interface Props {
  onPressStart: () => void;
}

const {title, subtitle, actionButton} = Strings.en.welcomeScreen;
const {margin} = Dimensions;

const WelcomeScreen = ({onPressStart}: Props) => {
  return (
    <View style={styles.container}>
      <TextView variant="title">{title}</TextView>
      <TextView textStyle={styles.subtitle} variant="body">
        {subtitle}
      </TextView>
      <Button onPress={onPressStart}>{actionButton}</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: margin.xl,
    justifyContent: 'center',
  },
  subtitle: {
    marginBottom: margin.xxl,
  },
});

export default WelcomeScreen;
