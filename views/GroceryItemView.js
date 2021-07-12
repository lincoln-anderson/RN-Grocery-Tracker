import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../../RN-Grocery-Tracker/styles/styles'

class GroceryItem extends React.Component {

  state = {
    name: 'steak',
    expDate: getCurrentDate(),
    purchasedDate: getPurchasedDate()
  }

  render() {
    return(
      <View>
        <Text>{ this.state.name }</Text>

        <Text>Purchased on: { this.state.expDate } </Text>

        <Text>Expires on: { this.state.purchasedDate }</Text>



      </View>
    )
  }
}

//for testing

const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format

    console.log(date + '-' + month + '-' + year)
    return date + '-' + month + '-' + year;//format: dd-mm-yyyy;


}

const getPurchasedDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format

    console.log((date - 8) + '-' + month + '-' + year)
    return (date - 8) + '-' + month + '-' + year;//format: dd-mm-yyyy;


}

export default GroceryItem;
