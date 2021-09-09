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
    // <View>    
    //   <Navbar title='Привет' />
    //     <View style={styles.container}>
    //        <AddTodo onSubmit={addTodo}/>            
    //        <FlatList 
    //         keyExtractor={item => item.id.toString()}
    //         data={todos}
    //          renderItem={({item}) => (
    //           <Todo todo={item} onRemove={removeTodo} />
    //          )}
    //         />
           
    //        {/* <View> 
    //          { todos.map(todo => {
    //            return <Todo todo={todo} key={todo.id} />
    //          }) }
    //        </View> */}
    //     </View>
    // </View>
    
    // <View style={styles.container}>
    //   {/* <StatusBar style="auto" /> */}
    //   <Text style={styles.text}>Open up App.js to start working on your app!</Text>      
    // </View>
    // <View style={{flex:1}}>
    // <Animated.Text style={{color: "#9b9b9b"}}>
    // <Text style={styles.text}>Open up App.js to start working on your app!</Text>      
    // </Animated.Text>
    // </View>
    <View style={styles.container}>  
    {/* {timenow()} */}
    <Animated.View style={[ { opacity: fadeAnim } ]}>
      <Text style={styles.text}>
        <TimeNow/>
      </Text>     
      {fadeIn()} 
      </Animated.View>   
      {fadeOut()}
      {/* {timenow()} */}
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
