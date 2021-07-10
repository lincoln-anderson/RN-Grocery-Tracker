import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../../RN-Grocery-Tracker/styles/styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to lincolns's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      <View style={styles.space} />
      <Button
        title="Go to Test"
        onPress={() =>
          navigation.navigate('Test', { name: 'test' })
        }
      />
    </View>
  );
};

export default HomeScreen;
