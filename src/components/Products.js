import { View, Text } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <View
      style={{
        marginTop: 25,
        marginBottom: 75,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.products.map((product, index) => {
        return (
          <ProductItem key={index} navigation={props.navigation} {...product} />
        );
      })}
    </View>
  );
};

export default Products;
