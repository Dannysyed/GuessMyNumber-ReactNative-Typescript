import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import GameScreen from './screens/GameScreen';
export default function App() {

  let [userNumber, setUserNumber] = useState<number>()
  let pickedNumberHandler = (pickedNumber: any) => {
    setUserNumber(pickedNumber)

  }
  let screen = < StartGameScreen pickedNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen currentNumber={userNumber} />
  }
  return (
    <LinearGradient colors={['#f0c741', '#61047b']} style={styles.container}>
      <ImageBackground source={require('./assets/images/sec.jpg')} resizeMode="cover" style={styles.container} imageStyle={styles.imageBackground} >
        <SafeAreaView style={styles.container}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    opacity: 0.15
  }
});
