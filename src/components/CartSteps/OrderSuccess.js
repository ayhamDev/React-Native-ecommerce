import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

import React from "react";

const OrderSuccess = () => {
  return (
    <View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./assets/gradientBall.json")}
      />
    </View>
  );
};

export default OrderSuccess;
