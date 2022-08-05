import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
  const rndnumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndnumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndnumber;
  }
};
let minBoundry=1;
let maxBoundry=100;
const GameScreen = ({userguess}) => {
  const initialguess = generateRandomBetween(1, 100, userguess);
  const [currentGuess, setCurrentguess] = useState(initialguess);

  const nextGuessHandler = (direction) => {
    if((direction==='lower' && currentGuess<userguess) || (direction==='higher' && currentGuess>userguess) ){
        Alert.alert('Dont lie!','You know you are wrong...',[{text:"Sorry",style:"cancel"}])
        return;
    }
    if(direction==='lower'){
        maxBoundry=currentGuess
    } else{
        minBoundry=currentGuess+1
    }
    console.log("minBoundry== "+minBoundry)
    console.log("maxBoundry== "+maxBoundry)
    console.log("currentGuess== "+currentGuess)
    const newRndNumber = generateRandomBetween(minBoundry,maxBoundry,currentGuess)
    setCurrentguess(newRndNumber)
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess!</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower ?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
        </View>
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'center'
  }
});

export default GameScreen;
