import React, {useState, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import { TimeNow } from './components/TimeNow';

export function HelloText() {  

const fadeAnim = useRef(new Animated.Value(0)).current;

const fadeIn = () => {
  // анимация открытия
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
};

const fadeOut = () => {
  setTimeout(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();},10000)
};



  return (
    
    <View style={styles.container}>      
    <Animated.View style={[ { opacity: fadeAnim } ]}>
      <Text style={styles.text}>
        <TimeNow/>
      </Text>     
      {fadeIn()} 
      </Animated.View>   
      {fadeOut()}
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
    fontSize: 20
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});
