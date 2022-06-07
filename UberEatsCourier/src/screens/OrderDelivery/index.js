import { View, Text } from "react-native";
import { useRef, useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import orders from "../../../assets/orders.json";

const order = orders[0];

const OrderDelivery = () => {
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const bottomSheetRef = useRef(null);
  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: "grey", width: 100 }}
      >
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, letterSpacing: 1 }}>14 min</Text>

          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />

          <Text style={{ fontSize: 25, letterSpacing: 1 }}>5km</Text>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 30, letterSpacing: 1, paddingVertical: 20 }}>
            {order.Restaurant.name}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto name="shopping-store" size={22} color="grey" />
            <Text
              style={{
                fontSize: 20,
                color: "grey",
                fontWeight: "600",
                padding: 20,
              }}
            >
              {order.Restaurant.address}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto name="map-marker-alt" size={30} color="grey" />
            <Text
              style={{
                fontSize: 20,
                color: "grey",
                fontWeight: "600",
                padding: 20,
              }}
            >
              {order.User.address}
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 2,
              borderColor: "lightgrey",
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                letterSpacing: 0.5,
                marginBottom: 5,
              }}
            >
              Onion Rings x1
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                letterSpacing: 0.5,
                marginBottom: 5,
              }}
            >
              Big Mac x2
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                letterSpacing: 0.5,
                marginBottom: 5,
              }}
            >
              Big Tasty x1
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                letterSpacing: 0.5,
                marginBottom: 5,
              }}
            >
              Coco Cola x1
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "green",
              marginTop: "auto",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 20,
                letterSpacing: 0.5,
              }}
            >
              Accept Order
            </Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};
export default OrderDelivery;
