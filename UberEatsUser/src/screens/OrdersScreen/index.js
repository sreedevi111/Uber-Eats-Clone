import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderListItem from '../../components/OrderListItem'
import orders from '../../../assets/data/orders.json'
import React from 'react'


const OrdersScreen = () => {
  return (
    <View style = {{flex:1, paddingTop:52}}>
     <FlatList 
     data={orders}
     renderItem ={({item}) => <OrderListItem order = {item}/>}
     />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})