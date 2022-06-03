import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList } from "react-native";
import RestaurantItem from '../../components/RestaurantItem'
import restaurants from "../../../assets/data/restaurants.json";
import { useState, useEffect } from "react";
import {DataStore} from 'aws-amplify'
import { Restaurant } from "../../models";

export default function HomeScreen() {
const[restaurants, setRestaurants] = useState([]);

// const fetchRestaurants = async() =>{
// const results = await DataStore.query(Restaurant);
// setRestaurants(results);
// };

useEffect (()=>{
  DataStore.query(Restaurant).then((results) =>setRestaurants(results))
},[])

  return (
    <View style ={styles.page}>
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    padding:10,
  }

});
