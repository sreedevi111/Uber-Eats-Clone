import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import awsmobile from "./src/aws-exports";
// Amplify.configure(awsmobile);
Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

 function App() {
  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsPage /> */}
      {/* <DishDetailScreen/> */}
      {/* <BasketDishItem /> */}
      {/* <OrdersScren /> */}
      {/* <OrderDetails /> */}
      <RootNavigator />

      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({});
