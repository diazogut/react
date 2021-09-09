import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import { HelloText } from './src/HelloText';
import {Navbar} from './src/Navbar'
import { Todo } from './src/Todo';



export default function App() {

  
  return (
    
  <View style={styles.container}> 
    <HelloText />
  </View>
     
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
