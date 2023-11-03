import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import GameScreen from './src/screens/GameScreen';

function App(): JSX.Element {
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const onPressStartHandler = () => {
    setHasGameStarted(true);
  };

  const renderCurrentScreen = () =>
    hasGameStarted ? (
      <GameScreen />
    ) : (
      <WelcomeScreen onPressStart={onPressStartHandler} />
    );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {renderCurrentScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
