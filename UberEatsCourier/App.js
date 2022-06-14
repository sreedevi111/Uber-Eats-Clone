import {GestureHandlerRootView} from "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar";
import orders from "./assets/orders.json";
import Navigation from "./src/navigation";
import {Amplify} from 'aws-amplify'
import { withAuthenticator } from "aws-amplify-react-native"; //HOC
import awsconfig from './src/aws-exports'
import { NavigationContainer } from "@react-navigation/native";

Amplify.configure({
  ...awsconfig,
Analytics:{
  disabled:true,
}
});

 function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex:1}}>
      <Navigation />
      </GestureHandlerRootView>
      
    </NavigationContainer>
  );
}

export default withAuthenticator(App);