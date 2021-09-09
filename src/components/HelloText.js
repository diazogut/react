import React, {useState, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import { TimeNow } from './TimeNow';

export function HelloText() 
{  
  return (    
    <View style={styles.container}>  
   
      <Text style={styles.text}>
        <TimeNow/>
      </Text>     

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
