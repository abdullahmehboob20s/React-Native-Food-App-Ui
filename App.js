import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

// IMPORTING SCREENS
import Home from './screens/Home';
import Details from './components/Details';

let Stack = createStackNavigator();

let App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
