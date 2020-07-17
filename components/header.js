import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return(
        <View style={styles.appbar}>
            <Text style={styles.text}> Todos App </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    appbar:{
        backgroundColor : 'coral',
        height : 80,
        width:400,
        
     //   flex : 1,
    //    flexDirection : 'row'
    },
    text: {
        color: 'white',
        fontSize : 25,
        alignContent : 'center',
        paddingTop : 20,
        paddingLeft : 110,
        margin: 8,
        
       // fontStyle: 'bold',
    },
});