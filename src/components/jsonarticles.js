import React, {useEffect, useState,useRef } from 'react';
import { View, Text, Animated } from 'react-native';

export function JsonArticles() 
{  
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => 
    {
        // анимация открытия
        Animated.timing(fadeAnim, 
        {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => 
    {
        setTimeout(() => 
        {
        // анимация скрытия
        Animated.timing(fadeAnim, 
            {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            }).start();
        },10000)
    };
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    function arrayRandElement(arr) 
    {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    const fetchAndLog = async () => 
    {
        try 
        {
            const response = await fetch('http://192.168.0.162:3000/articles.json');            
            const json = await response.json();
            console.log('бугага');//
            const random = (arrayRandElement(json));
            const body = random.body
            setData(body);
            console.log(body)
            return body;
        }
        catch (error)
        {
            console.error(error);
            const body = 'Не могу подключиться к серверу'
            setData(body);
        }   
    }

    useEffect(() => 
    {
        fetchAndLog();
    }, []);

    return (    
        


        <View style={{ flex: 1, padding: 24 }}>    
        <Animated.View style={[ { opacity: fadeAnim } ]}>                  
            <Text style={{ color: 'white' }}>{data}</Text>
            {fadeIn()}   
        </Animated.View>
        {fadeOut()}
        </View>      
    )          
}