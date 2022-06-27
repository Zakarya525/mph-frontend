import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feeds from '../screens/Feeds';
import Home from '../screens/Home';
import About from '../screens/About';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>

        <Tab.Screen name='Taste Of Peshawar' component={Home} options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons style={{ marginTop: 7 }} name="home" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name='Feeds' component={StackNavigation} options={{
          headerShown: false,
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

export default BottomTabNavigation;

const styles = StyleSheet.create({})