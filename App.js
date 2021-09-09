import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import { HelloText } from './src/HelloText';
import {Navbar} from './src/Navbar'
import { Todo } from './src/Todo';



export default function App() {

  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // const fadeIn = () => {
  //   // анимация открытия
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const fadeOut = () => {
  //   // анимация скрытия
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // };
  

  // const [todos, setTodos] = useState ([])

  // const addTodo = (title) => {
  //   setTodos(prev => [...prev, {
  //     id: Date.now().toString(),
  //     title
  //   }])
  // }

  // const removeTodo = id => {
  //   setTodos(prev => prev.filter(todo => todo.id !== id))
  // }

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
   
   
  //  <View style={styles.container}>  
  //   <Animated.View style={[ { opacity: fadeAnim } ]}>
  //     <Text style={styles.text}>Доброй ночи, спасибо что использовали это приложение!</Text>      
  //     </Animated.View>   
  //     <View style={styles.buttonRow}>
  //       <Button title="Fade In View" onPress={fadeIn} />
  //       <Button title="Fade Out View" onPress={fadeOut} />
  //     </View>
  //    </View>
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
