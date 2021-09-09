import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { HelloText } from './src/components/HelloText';
import { JsonArticles } from './src/components/jsonarticles'; 

export default function App() 
{
  return (
    <View style={styles.container}> 
      <View > 
        <HelloText />
        <JsonArticles/>
        <Button title="Обновить" onPress={JsonArticles()}></Button>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create(
{
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
