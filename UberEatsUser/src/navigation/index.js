import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import BasketDishItem from "../../src/components/BasketDishItem";
import OrderDetails from "../../src/components/OrderListItem";
import OrdersScren from "../../src/components/OrderListItem";
import DishDetailScreen from "../../src/screens/DishDetailsScreen";
import HomeScreen from "../../src/screens/HomeScreen";
import RestaurantDetailsPage from "../../src/screens/RestaurantDetailsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantDetailsPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle = {{backgroundColor:"white"}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
       name="Orders"
        component={OrderDetails}
        options ={{tabBarIcon: ({color}) =>(
            <MaterialIcons name="list-alt" size={24} color={color} />
        )}}
        
        />


      <Tab.Screen name="Profile" component={HomeScreen}
      options ={{
        tabBarIcon:({color})=>(
        <FontAwesome5 name="user-alt" size={24} color={color} />
) }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
// export default HomeTabs;
