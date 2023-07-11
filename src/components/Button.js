import { Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";

const Button = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      style={{
        paddingVertical: 15,
        paddingHorizontal: 32,
        backgroundColor: colors.secondary,
        borderRadius: 15,
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 16,
          fontFamily: "quicksand b",
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
