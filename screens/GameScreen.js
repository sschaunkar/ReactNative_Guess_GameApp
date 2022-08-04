import React from "react";
import { View, Text,StyleSheet } from "react-native"
import Title from "../components/Title";

const GameScreen = () => {
    return <View style={styles.screen}>
        <Title>Opponent's Guess!</Title>
        {/* Guess Component here */}
        <View>
            <Text>higer or lower</Text>
            {/* +- */}
        </View>
        {/* <View>Log Rounds</View> */}
    </View>
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:12
    }
})

export default GameScreen;