import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import CartProductList from "../CartProductList";
import { ScrollView } from "react-native-actions-sheet";
import colors from "../../utils/colors";
import { TextInput } from "react-native";
import ButtonBlue from "../ButtonBlue";
import * as Animatable from "react-native-animatable";

const ShoppingCart = (props) => {
  const [PromoCode, setPromoCode] = useState("");

  const ProductsList = [
    {
      img: require("../../../assets/demo/cloth1.png"),
      title: "Cotton queen T",
      price: (33).toFixed(2),
      size: "M",
      color: "#9528D9",
      qty: 2,
    },
    {
      img: require("../../../assets/demo/cloth2.png"),
      title: "Cotton Style T",
      price: (52).toFixed(2),
      size: "L",
      color: "#24232B",
      qty: 1,
    },
    {
      img: require("../../../assets/demo/cloth3.png"),
      title: "Cotton Style T",
      price: (21).toFixed(2),
      color: "#31BAD8",
      size: "S",
      qty: 4,
    },
    {
      img: require("../../../assets/demo/cloth1.png"),
      title: "Cotton queen T",
      price: (33).toFixed(2),
      size: "M",
      color: "#9528D9",
      qty: 2,
    },
  ];
  return (
    <Animatable.View animation={"bounceIn"} duration={600} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 32,
          paddingVertical: 16,
        }}
      >
        <ScrollView
          {...props.scrollHandlers}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
          }}
        >
          <CartProductList products={ProductsList} />
        </ScrollView>

        <View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: colors.white,
              marginVertical: 16,
              gap: 16,
            }}
          />
          <View
            style={{
              gap: 4,
              backgroundColor: colors.white,
              borderRadius: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 6,
            }}
          >
            <TextInput
              placeholder="Promo Code"
              onChangeText={(text) => setPromoCode(text)}
              style={{
                flex: 1,
                paddingLeft: 4,
                fontFamily: "quicksand m",
                color: colors.primary,
              }}
            />
            <ButtonBlue disabled={Number(PromoCode.length) == 0}>
              Apply
            </ButtonBlue>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: colors.white,
              marginVertical: 16,
              gap: 16,
            }}
          />
          <View
            style={{
              paddingTop: 16,
            }}
          >
            <View>
              <View
                style={{
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
                  Sub Total
                </Text>
                <Text
                  style={{
                    fontFamily: "quicksand b",
                    fontSize: 20,
                    color: colors.primary,
                  }}
                >
                  $84.00
                </Text>
              </View>
              <View
                style={{
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
                  Shipping
                </Text>
                <Text
                  style={{
                    fontFamily: "quicksand b",
                    fontSize: 20,
                    color: colors.primary,
                  }}
                >
                  $6.00
                </Text>
              </View>
              <View
                style={{
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
                  Tax (10%)
                </Text>
                <Text
                  style={{
                    fontFamily: "quicksand b",
                    fontSize: 20,
                    color: colors.primary,
                  }}
                >
                  $9.00
                </Text>
              </View>
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
          </View>
          <View style={{ paddingTop: 32 }}>
            <Button onPress={() => props.SetSelectedStep(1)}>
              Proceed to Checkout
            </Button>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default ShoppingCart;
