import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import {colors} from '../constants/Colors'

const StartGameScreen = ({getNumber}) => {
  const [enteredValue, setEnteredValue] = useState('');

  const inputHandler = enteredText => {
    setEnteredValue(enteredText);
  };

  const resetInput = () =>{
    setEnteredValue('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number must be a valid number between 1 and 99',
        [{text:'OK',style:'destructive',onPress:resetInput}]
      );
      return;
    }
    getNumber(chosenNumber)
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={inputHandler}
        value={enteredValue}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: colors.primary700,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.yellow100,
    borderBottomWidth: 2,
    color: colors.yellow100,
    marginVertical: 8,
    fontWeight: 'bold',
    padding: 6,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
