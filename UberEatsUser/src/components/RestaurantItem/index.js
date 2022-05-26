import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

const RestaurantItem = ({restaurant}) => {
   
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style ={styles.row}>

      <View>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>$ {restaurant.deliveryFee} {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes</Text>
      </View>


      <View style ={styles.rating}>
<Text>{restaurant.rating}</Text>

      </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 6 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    color: "gray",
  },
  row:{
      flex:1,
      flexDirection:'row',
      alignItems: 'center'
  },
  rating:{
      marginLeft:'auto',
      backgroundColor:'lightgray',
      
      borderRadius:20,
      width:30,
      height:25,
      alignItems:'center',
      justifyContent:'center'

  }
});
