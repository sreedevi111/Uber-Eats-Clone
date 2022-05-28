import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle" size={45} color="white" />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} {restaurant.minDeliveryTime} -{" "}
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
      <DishListItem dish={restaurant.dishes[0]} />
      <DishListItem dish={restaurant.dishes[1]} />
      <DishListItem dish={restaurant.dishes[2]} />
    </View>
  );
};

export default RestaurantDetailsPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    // padding: 20,
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 2.5,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    margin: 10,
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
  },
  container: {
    margin: 10,
  },
});
