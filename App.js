import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './SCREENS/HomeScreen';
import LocationScreen from './SCREENS/LocationScreen';
import MeteorScreen from './SCREENS/MeteorScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Location" component={LocationScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Meteor" component={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;