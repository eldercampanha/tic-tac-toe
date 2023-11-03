import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import GameScreen from './src/screens/GameScreen';

function App(): JSX.Element {
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const onPressStartHandler = () => {
    setHasGameStarted(true);
  };

  const renderCurrentScreen = () => {
    if (isGameOver) {
      return <GameOverScreen />;
    }
    if (hasGameStarted) {
      return <GameScreen />;
    }
    return <WelcomeScreen onPressStart={onPressStartHandler} />;
  };

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
