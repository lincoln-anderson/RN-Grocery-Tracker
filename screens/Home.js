import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../../RN-Grocery-Tracker/styles/styles'
import GroceryItemView from '../../RN-Grocery-Tracker/views/GroceryItemView'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GroceryItemView name='steak' expDate={ getCurrentDate() } purchasedDate={ getPurchasedDate() } />
      <View style={styles.spacer} />
      <GroceryItemView name='chicken' expDate={ getCurrentDate() } purchasedDate={ getPurchasedDate() } />
    </View>
  );
};


//for testing

const getPurchasedDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format

    console.log(date + '-' + month + '-' + year)
    return date + '-' + month + '-' + year;//format: dd-mm-yyyy;


}

const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format

    console.log((date - 8) + '-' + month + '-' + year)
    return (date - 8) + '-' + month + '-' + year;//format: dd-mm-yyyy;


}

export default HomeScreen;
