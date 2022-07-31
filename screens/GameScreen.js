import React from "react";
import { View, Text,StyleSheet } from "react-native"

const GameScreen = () => {
    return <View style={styles.screen}>
        <Text style={styles.titleText}>Opponents Guess!</Text>
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
    },
    titleText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ddb52f'
    }
})

export default GameScreen;