import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState ('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        }
        else {  
            Alert.alert('Название дела не может быть пустым.')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
              style={styles.input}
              onChangeText={text => setValue(text)}
              value={value}
              placeholder="Введите название дела..."
              autoCorrect={false}
              autoCapitalize='none'
            />
            <Button title='Добавить' onPress={pressHandler}/>            
        </View>
    )
}

const styles = StyleSheet.create ({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        borderStyle: 'solid',
        padding: 10
    }
})