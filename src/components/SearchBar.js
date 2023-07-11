import { View, Text, TextInput } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        paddingHorizontal: 32,
        gap: 4,
        backgroundColor: colors.white,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AntDesign name="search1" size={24} style={{ opacity: 0.25 }} />
      <TextInput
        placeholder="Search"
        style={{
          width: "100%",
          padding: 2,
          fontFamily: "quicksand m",
          color: colors.primary,
        }}
      />
    </View>
  );
};

export default SearchBar;
