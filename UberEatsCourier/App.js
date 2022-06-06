import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import orders from "./assets/orders.json";
// import OrderScreen from './src/screens/OrderScreen'
import OrderDelivery from "./src/screens/OrderDelivery";


import OrderItem from "./src/components/OrderItem";

const order = orders[0];

export default function App() {
  return(
    <View style={styles.container}>
    {/* <FlatList 
    data = {orders}
    renderItem ={({item}) => <OrderItem order = {item}/>}
    /> */}
    < OrderDelivery/>
   <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
    paddingTop: 50
  },
});
