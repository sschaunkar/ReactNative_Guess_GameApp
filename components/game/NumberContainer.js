import React from "react";
import { Text,View, StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";

const NumberContainer = ({children})=>{
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
container:{
    borderWidth:4,
    borderColor:colors.yellow100,
    padding:24,
    margin:24,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
},
numberText:{
   color:colors.yellow100,
   fontSize:36,
   fontWeight:'bold'
}
})

export default NumberContainer;

