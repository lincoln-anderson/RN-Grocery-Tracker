import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Grocery Tracker
      </Text>
      <Text style={styles.welcome}>
        WE MOVE
      </Text>
      <Text style={styles.instructions}>
        React Native
      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    fontSize: 30,
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});
