import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feeds from './src/pages/Feeds';
import Home from './src/pages/Home';
import About from './src/pages/About';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>

        <Tab.Screen name='Taste Of Peshawar' component={Home} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons style={{ marginTop: 7 }} name="home" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name='Popular Items' component={Feeds} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons style={{ marginTop: 7 }} name="cart" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name='About' component={About} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons style={{ marginTop: 7 }} name="information" color={color} size={26} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
