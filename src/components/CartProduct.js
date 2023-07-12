import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../utils/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
const CartProduct = (props) => {
  const [qty, SetQty] = useState(1);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Image
          style={{
            height: 90,
            width: 75,
            resizeMode: "cover",
            borderRadius: 15,
          }}
          source={props.img}
        />
        <View
          style={{
            gap: 5,
          }}
        >
          <View
            style={{
              gap: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "quicksand m",
                fontSize: 16,
                color: colors.primary,
              }}
            >
              {props.title}
            </Text>
            <Text
              style={{
                fontFamily: "quicksand b",
                fontSize: 16,
                color: colors.primary,
              }}
            >
              ${props.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                SetQty((prev) => {
                  return prev + 1;
                })
              }
              style={{
                backgroundColor: colors.white,
                width: 30,
                borderRadius: 100,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name={"plus"} size={20} />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontFamily: "quicksand b",
                }}
              >
                {qty}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                SetQty((prev) => {
                  return prev - 1 == 0 ? prev : prev - 1;
                });
              }}
              style={{
                backgroundColor: colors.white,
                width: 30,
                borderRadius: 100,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name={"remove"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "quicksand",
              color: colors.white,
            }}
          >
            {props.size}
          </Text>
        </View>
        <View
          style={{
            width: 35,
            height: 35,
            backgroundColor: props.color,
            borderRadius: 100,
          }}
        />
      </View>
    </View>
  );
};

export default CartProduct;
