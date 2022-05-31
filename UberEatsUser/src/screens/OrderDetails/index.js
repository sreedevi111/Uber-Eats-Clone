import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles';
import BasketDishItem from '../../components/BasketDishItem';
import DishListItem from '../../components/DishListItem'
import OrderListItem from '../../components/OrderListItem';

const order = orders[0];


const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.container}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.subtitle}>
         {order.status} &#8226; 2days ago
        </Text>
        <Text style ={styles.menuTitle}>Your Order</Text>
      </View>
    </View>
    </View>
  )
}

const OrderDetails =() =>{
    return(
        <FlatList 
        ListHeaderComponent={OrderDetailsHeader}
        data={restaurants[0].dishes}
        renderItem ={({item}) =><BasketDishItem basketDish={item} />}
        />
    )
}

export default OrderDetails

