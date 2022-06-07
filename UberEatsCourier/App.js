import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import orders from "./assets/orders.json";
import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

import OrderItem from "./src/components/OrderItem";

const order = orders[0];

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
