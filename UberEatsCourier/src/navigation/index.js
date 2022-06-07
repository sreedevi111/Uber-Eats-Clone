import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderDelivery from "../screens/OrderDelivery";
import OrderScreen from "../screens/OrderScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="OrderScreen" component={OrderScreen} />
    <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
  </Stack.Navigator>
    )
  
};

export default Navigation;
