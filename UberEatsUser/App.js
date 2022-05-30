import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BasketDishItem from "./src/screens/Basket";
import OrdersScren from './src/screens/OrdersScreen'

// import DishDetailScreen from "./src/screens/DishDetailsScreen";

// import HomeScreen from "./src/screens/HomeScreen";
// import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsPage /> */}
      {/* <DishDetailScreen/> */}
      {/* <BasketDishItem /> */}
      <OrdersScren />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    // paddingVertical: 30,
  },
});
