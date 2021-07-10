import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubtestScreen from '../RN-Grocery-Tracker/screens/subtest'
import ProfileScreen from '../RN-Grocery-Tracker/screens/Profile'
import HomeScreen from '../RN-Grocery-Tracker/screens/Home'
import TestScreen from '../RN-Grocery-Tracker/screens/Test'
import styles from '../RN-Grocery-Tracker/styles/styles'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer style={styles.NavigationContainer}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Groceries To Expire Soon' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Subtest" component={SubtestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;
