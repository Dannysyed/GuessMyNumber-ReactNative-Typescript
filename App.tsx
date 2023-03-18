import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
export default function App() {
  return (
    <LinearGradient colors={['#f0c741', '#61047b']} style={styles.container}>
      <ImageBackground source={require('./assets/images/ugo.jpg')} resizeMode="cover" style={styles.container} imageStyle={styles.imageBackground} >
        < StartGameScreen />
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
