/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const App = () => {
  const name = 'myeongjune';
  return (
   <View style={styles.container}>
     <Text style={styles.title}>
       {(()=>{
         if (name === 'Hanbit') return 'My name is Hanbit';
         else if (name === 'myeongjune') return 'My name is myoungjune';
         else return 'My name is React Native';
       }
       )()}
     </Text>
     {/* <Button color="#000" title="Button" onPress={()=> alert('click!!!')}/>
     <MyButton onPress={()=> alert('props')}/>
     <Counter/>
       <EventButton></EventButton> */}
       <EventInput/>
   </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title:{
    fontSize: 30,
    color: '#ff0000',
  },
  btnstyle:{
    color: '#ff0000',
  }
});

export default App;
