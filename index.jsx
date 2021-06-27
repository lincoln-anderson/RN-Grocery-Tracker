import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          this is so cool
        </Text>
        <Text style={styles.instructions}>
          i cant get over this
        </Text>
        <Text style={styles.welcome}>
          More text items
        </Text>
        
      </View>
    );
  }
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

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'my-rn-app', () => MyApp
);