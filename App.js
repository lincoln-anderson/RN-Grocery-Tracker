import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { Spacer, VStack, HStack, Text, Button } from 'swiftui-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <VStack
      aligment='leading'
      cornerRadius={20}
      >
        <HStack
        aligment='leading'
        cornerRadius={20}
        >
          <Spacer/>
          <Text font='title'>Some cool text</Text>
          <Spacer/>
          <Text font='title2'>more text</Text>
          <Spacer/>
        </HStack>
      </VStack>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
