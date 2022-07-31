import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const PrimaryButton = ({children, onPress}) => {
  

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{color: '#644202'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow:'hidden'
  },
  buttonInnerContainer:{
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PrimaryButton;
