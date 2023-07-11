import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";

const Appbar = ({ navigation, StackNavigation }) => {
  return (
    <View
      style={{
        paddingHorizontal: 32,
        paddingTop: 50,
        paddingBottom: 10,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <TouchableOpacity onPress={() => [navigation.navigate("profile")]}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 1000 }}
            source={require("../../assets/demo/user.jpg")}
          />
        </TouchableOpacity>
        <Text style={{ fontFamily: "quicksand m", fontSize: 14 }}>
          Welcome
          <Text style={{ color: colors.secondary, fontFamily: "quicksand b" }}>
            {", "}
            Ayham
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <TouchableOpacity>
          <AntDesign name={"search1"} size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{ position: "relative", padding: 8 }}
        >
          <View
            style={{
              position: "absolute",
              borderWidth: 2,
              borderColor: "white",
              backgroundColor: colors.secondary,
              top: 0,
              right: 0,
              width: 20,
              height: 20,
              borderRadius: 50,
              zIndex: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
          <AntDesign name={"shoppingcart"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appbar;
