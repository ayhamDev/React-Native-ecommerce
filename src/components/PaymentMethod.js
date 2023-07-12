import { View, Text } from "react-native";
import React, { useState } from "react";
import RadioButtonsGroup from "./RadioButtonsGroup";
import colors from "../utils/colors";

const PaymentMethod = () => {
  const [selectedPayment, SetSelectedPayment] = useState(0);

  const Payments = [
    {
      component: (props) => (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingVertical: 10,
          }}
        >
          {props.children}
          <Text>Debit / Credit Card</Text>
        </View>
      ),
    },
    {
      component: (props) => (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingVertical: 10,
          }}
        >
          {props.children}
          <Text>PayPal</Text>
        </View>
      ),
    },
    {
      component: (props) => (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingVertical: 10,
          }}
        >
          {props.children}
          <Text>E-Wallet</Text>
        </View>
      ),
    },
    {
      component: (props) => (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingVertical: 10,
          }}
        >
          {props.children}
          <Text>Bank Transfer</Text>
        </View>
      ),
    },
  ];
  return (
    <RadioButtonsGroup
      container={(props) => {
        return <View>{props.children}</View>;
      }}
      activeColor={colors.primary}
      activeOpacity={0.25}
      selected={selectedPayment}
      SetSelected={SetSelectedPayment}
      size={25}
      data={Payments}
    />
  );
};

export default PaymentMethod;
