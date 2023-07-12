import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RadioButtonsGroup from "../RadioButtonsGroup";
import colors from "../../utils/colors";
import { ScrollView } from "react-native";
import PaymentMethod from "../PaymentMethod";
import Addreess from "../Addreess";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Button from "../Button";

const CheckoutOrder = (Props) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 16,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View
          style={{
            paddingHorizontal: 32,
          }}
        >
          <Text
            style={{
              fontFamily: "quicksand b",
              fontSize: 16,
            }}
          >
            Payment method
          </Text>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <PaymentMethod />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 32,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: colors.white,
              marginVertical: 16,
              gap: 16,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "quicksand b",
              fontSize: 16,
              paddingHorizontal: 32,
            }}
          >
            Delivery Address
          </Text>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Addreess />
            <TouchableOpacity
              style={{
                paddingHorizontal: 32,
                marginTop: 16,
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <AntDesign name={"plus"} color={colors.primary} size={16} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "quicksand m",
                  color: colors.primary,
                }}
              >
                Add a New Address
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 32,
        }}
      >
        <View
          style={{
            paddingTop: 32,
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="shipping-fast"
            size={24}
            color={colors.secondary}
          />
          <Text
            style={{
              fontFamily: "quicksand m",
            }}
          >
            Estimated delivery:{" "}
            <Text
              style={{
                fontFamily: "quicksand b",
              }}
            >
              25 March 2024
            </Text>
          </Text>
        </View>
        <View
          style={{
            paddingTop: 25,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "quicksand",
              fontSize: 14,
              color: colors.primary,
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontFamily: "quicksand b",
              fontSize: 30,
              color: colors.secondary,
            }}
          >
            $90.00
          </Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <Button
            onPress={() => {
              Props.SetSelectedStep(2);
            }}
          >
            Pay Now
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CheckoutOrder;
