import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import awsmobile from "./src/aws-exports";
import AuthContextProvider from './src/contexts/AuthContext'

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
      <AuthContextProvider>
      <RootNavigator />
{/* By putting root navigator in authcontextprovider, it is sent as children */}
      </AuthContextProvider>
    
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({});
