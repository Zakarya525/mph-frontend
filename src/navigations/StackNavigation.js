import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Feeds from '../screens/Feeds';
import About from '../screens/About';
import Home from '../screens/About';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PopularItems" component={Feeds} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>

  )
}

export default StackNavigation