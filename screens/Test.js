import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const TestScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <Button
        title="Go to Subtest"
        onPress={() =>
          navigation.navigate('Subtest', { name: 'Subtest' })
        }
      />
    </View>

  );
};

export default TestScreen;
