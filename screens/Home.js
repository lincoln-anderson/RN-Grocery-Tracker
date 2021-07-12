import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    FlatList,
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ActivityIndicator,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../../RN-Grocery-Tracker/styles/styles'
import GroceryItemView from '../../RN-Grocery-Tracker/views/GroceryItemView'

import axios from 'axios';

export default function HomeScreen(props) {
    const dispatch = useDispatch();
    const { navigation } = props;

    const [isFetching, setIsFetching] = useState(false);


    const dataReducer = useSelector((state) => state.dataReducer);
    const { quotes } = dataReducer;

    useEffect(() => getData(), []);

    const getData = () => {
        setIsFetching(true);

        //OPTION 1 - LOCAL DATA
        AsyncStorage.getItem('quotes', (err, quotes) => {
            if (err) alert(err.message);
            else if (quotes !== null) dispatch(addQuotes(JSON.parse(quotes)));

            setIsFetching(false)
        });

    };

    const renderItem = ({item, index}) => {
        return (
            <ListItem item={item} index={index} navigation={navigation} onDelete={onDelete} onEdit={onEdit}/>
        )
    };


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
