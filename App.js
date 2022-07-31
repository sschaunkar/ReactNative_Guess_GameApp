import React, { useState } from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';

import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  const [pickNumber, setpickNumber] = useState()

  const getPickedNumber = (userNumber) => {
    setpickNumber(userNumber)
  }

  let screen = <StartGameScreen getNumber = {getPickedNumber} />

  if(pickNumber){
    screen=<GameScreen />
  }

  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.rootContainer}>
      <ImageBackground
        style={styles.rootContainer}
        source={require('./assests/images/dice.jpg')}
        resizeMode='cover'
        imageStyle={styles.backgroundimage}
        >
          <SafeAreaView style={styles.rootContainer}>
        {screen}
          </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundimage:{
    opacity:0.15
  }
});

export default App;
