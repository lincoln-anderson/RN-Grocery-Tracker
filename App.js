import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Grocery Tracker' }}
        />
        <Stack.Screen name="Groceries" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Mark food as Eaten"
      onPress={() =>
        navigation.navigate('Groceries', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text></Text>;
};

const MyTitle = () => {
  return(
    <Text style={styles.welcome}>Hello</Text>
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
    color: 'white',
    borderWidth: 3,
    borderColor: '#B0B0B0'
  },
  instructions: {
    fontSize: 30,
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});
