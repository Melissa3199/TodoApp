import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


export default function TodoItem({item, pressHandler}) {
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.todo}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    item:{
        fontSize : 20,
        color : 'grey',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        

    },

});