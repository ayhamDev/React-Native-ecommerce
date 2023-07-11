import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const ProductItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={() => {
        props.navigation.navigate("product");
      }}
    >
      <View>
        <Image
          style={{
            backgroundColor: colors.white,
            width: 150,
            height: 200,
            borderRadius: 15,
            resizeMode: "cover",
          }}
          source={props.img}
        />
        <Text
          style={{
            fontFamily: "quicksand m",
            marginTop: 10,
            fontSize: 16,
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            fontFamily: "quicksand b",
            fontSize: 20,
          }}
        >
          ${props.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
