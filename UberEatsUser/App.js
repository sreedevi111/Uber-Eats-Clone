import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Restaurant item */}
      <View style={styles.restaurantContainer}>
        <Image
          source={{
            uri: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger-1200x675.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Cafe Pumpkin</Text>
        <Text style={styles.subtitle}>Rs 800 20-30 minutes</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:10
  },
  restaurantContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 6 / 3,
    marginBottom:5
  },
  title: {
    fontSize:18,
    fontWeight:'bold',
    marginVertical: 5
  },
  subtitle:{
    color:'gray'
  }
});
