import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";

const ButtonBlue = (props) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.65}
      style={{
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: colors.primary,
        borderRadius: 15,
        opacity: props?.disabled ? 0.5 : 1,
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

export default ButtonBlue;
