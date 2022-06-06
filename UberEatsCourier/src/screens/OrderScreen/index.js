import { useRef } from "react";
import { View, Text, FlatList } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import orders from "../../../assets/orders.json";
import OrderItem from "../../components/OrderItem";

const OrderScreen = () => {
  const bottomSheetRef = useRef(null);

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={["12%", "95%"]}>
        <View style={{ flex: 1, alignItems: "center", marginBottom:30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.5,
              paddingBottom: 0.5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5 }}>
            Available orders:{orders.length}
          </Text>
          
        </View>
        <FlatList 
    data = {orders}
    renderItem ={({item}) => <OrderItem order = {item}/>}
    />
      </BottomSheet>
    </View>
  );
};

export default OrderScreen;
