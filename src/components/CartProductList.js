import { View, Text } from "react-native";
import React from "react";
import CartProduct from "./CartProduct";

const CartProductList = (props) => {
  return (
    <View
      style={{
        gap: 30,
        paddingVertical: 32,
      }}
    >
      {props.products.map((product, index) => {
        return <CartProduct key={index} {...product} />;
      })}
    </View>
  );
};

export default CartProductList;
