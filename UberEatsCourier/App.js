import {GestureHandlerRootView} from "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar";
import orders from "./assets/orders.json";
import Navigation from "./src/navigation";
import {Amplify} from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { NavigationContainer } from "@react-navigation/native";

Amplify.configure({
  ...awsconfig,
Analytics:{
  disabled:true,
}
});

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex:1}}>
      <Navigation />
      </GestureHandlerRootView>
      
    </NavigationContainer>
  );
}
