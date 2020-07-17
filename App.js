import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header.js';
import TodoItem from './components/todoItem.js';


export default function App() {
  const [todos, setTodos] = useState([
    { todo: 'Acheter du pain', id: 1 },
    { todo: 'Changer l\'ampoule', id: 2 },
    { todo: 'Faire la lessive', id: 3 },
  ]);
  const pressHandler = (id)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.id!=id);
    });
  };
  return (
    <View style={styles.container}>
      <Header/>
      <View>
        {/**/}
        <View style={styles.list}>
        <FlatList
                keyExtractor = {(item)=>item.id}
                data = {todos}
                renderItem = {({item})=>{
                    return(
                      <TodoItem item={item} pressHandler = {pressHandler}/>
                    );
                }
                }

            />
        </View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  list : {
    marginTop : 40,

  },
});
