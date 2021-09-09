import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export function TimeNow() 
{ 
  var date = new Date();
  var current_hour = date.getHours();

  let night = ['0','1','2','3','4','5']
  let morning = ['6','7','8','9','10']
  let day = ['11','12','13','14','15','16','17']
  let evening = ['18','19','20','21','22','23']

  let timesofday =  [night,morning,day,evening]
  let justnow = false
  let i = 0

  while (justnow === false) 
  {
    let justnow = timesofday[i].includes(current_hour.toString())
    
    if (justnow === true) 
    {
      if (i==0) 
      {
        var texth = "Доброй ночи! Интересный факт:"
      }
      else if (i==1) 
      {
        var texth = "Доброе утро! Интересный факт:"
      }
      else if (i==2) 
      {
        var texth = "Добрый день! Интересный факт:"
      }
      else if (i==3) 
      {
        var texth = "Добрый вечер! Интересный факт:"
      }
      break
    }
    i++
  }        
  return (
    <View>
      <Text style={styles.text}>{texth}</Text>     
    </View>
  )
        
 }

 const styles = StyleSheet.create(
   {
    text: 
    {
      color: 'white',
      textAlign: 'center',
      fontSize: 20
    },
  });
  