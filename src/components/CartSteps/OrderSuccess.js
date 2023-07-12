import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

import React from "react";
import Button from "../Button";
import { SheetManager } from "react-native-actions-sheet";
import * as Animatable from "react-native-animatable";

const OrderSuccess = () => {
  return (
    <Animatable.View animation={"bounceIn"} duration={600} style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 32, paddingVertical: 16 }}>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <LottieView
            autoPlay
            loop={false}
            style={{
              width: 200,
              height: 200,
              backgroundColor: "transparent",
            }}
            source={require("../../../assets/animation/order.json")}
          />
          <Text
            style={{
              fontFamily: "quicksand b",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Payment Done Successfully and your order has been placed.
          </Text>
        </View>
        <Button onPress={() => SheetManager.hide("cart")}>
          Continue Shopping
        </Button>
      </View>
    </Animatable.View>
  );
};

export default OrderSuccess;
