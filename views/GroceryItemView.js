import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../../RN-Grocery-Tracker/styles/styles'

function GroceryItem(props) {
    return(
      <View>
        <Text>{ props.name }</Text>

        <Text>Purchased on: { props.expDate } </Text>

        <Text>Expires on: { props.purchasedDate }</Text>

      </View>
    )
};


export default GroceryItem;
