import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import React, { useEffect, useState } from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

const ProductDetails = () => {
  const [selectedImage, SetSelectedImage] = useState(
    require("../../../assets/demo/cloth0.png")
  );
  const [qty, SetQty] = useState(1);
  const [selectedSize, SetSelectedSize] = useState(1);
  const [selectedColor, SetSelectetColor] = useState(0);
  const sizes = [
    {
      name: "S",
    },
    {
      name: "M",
    },
    {
      name: "L",
    },
  ];
  const color = ["#24232B", "#31BAD8", "#9528D9"];

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
          position: "relative",
          paddingTop: 50,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            paddingHorizontal: 12,
            justifyContent: "space-between",
            flexDirection: "row",
            zIndex: 100,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              width: 75,
              height: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
            }}
          >
            <MaterialIcons
              name={"arrow-back-ios"}
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.65} style={{ padding: 16 }}>
            <View
              style={{
                backgroundColor: "white",
                width: 50,
                height: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign size={24} name={"heart"} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 500,
            width: "100%",
            paddingHorizontal: 12,
            borderRadius: 24,
          }}
        >
          <View
            style={{
              width: "100%",
              maxHeight: 500,
              position: "relative",
            }}
          >
            <Image
              style={{
                paddingTop: 12,
                width: "100%",
                height: 500,
                maxHeight: 500,
                resizeMode: "cover",
                borderRadius: 24,
              }}
              source={selectedImage}
            />
            <View
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                backgroundColor: "white",
                padding: 6,
                borderRadius: 15,
                gap: 8,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  SetSelectedImage(require("../../../assets/demo/cloth0.png"));
                }}
              >
                <Image
                  style={{
                    paddingTop: 12,
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                    resizeMode: "contain",
                  }}
                  source={require("../../../assets/demo/cloth0.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  SetSelectedImage(require("../../../assets/demo/cloth2.png"));
                }}
              >
                <Image
                  style={{
                    paddingTop: 12,
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                    resizeMode: "contain",
                  }}
                  source={require("../../../assets/demo/cloth2.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  SetSelectedImage(require("../../../assets/demo/cloth1.png"));
                }}
              >
                <Image
                  style={{
                    paddingTop: 12,
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                    resizeMode: "contain",
                  }}
                  source={require("../../../assets/demo/cloth1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 32,
            marginBottom: 150,
          }}
        >
          <Text
            style={{
              fontFamily: "quicksand b",
              fontSize: 20,
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            Cotton queen T-shirt
          </Text>
          <Text
            style={{
              fontFamily: "quicksand b",
              fontSize: 20,
              flex: 1,
              flexWrap: "wrap",
              textAlign: "right",
            }}
          >
            $43.00
          </Text>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                fontFamily: "quicksand m",
                fontSize: 16,
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              Color
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                height: 55,
                gap: 10,
              }}
            >
              {color.map((color, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => SetSelectetColor(index)}
                    key={index}
                    style={{
                      width: selectedColor == index ? 35 : 30,
                      height: selectedColor == index ? 35 : 30,
                      backgroundColor: color,
                      borderRadius: 100,
                    }}
                  />
                );
              })}
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "quicksand m",
                fontSize: 16,
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              Size
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                gap: 10,
                height: 50,
              }}
            >
              {sizes.map((size, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => SetSelectedSize(index)}
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:
                        selectedSize == index ? colors.primary : colors.white,
                    }}
                    key={index}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: "quicksand",
                        color:
                          selectedSize == index ? colors.white : colors.primary,
                      }}
                    >
                      {size.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 16,
          paddingHorizontal: 32,
          elevation: 12,
        }}
      >
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
              width: 40,
              borderRadius: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name={"plus"} size={24} />
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
              width: 40,
              borderRadius: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name={"remove"} size={24} />
          </TouchableOpacity>
        </View>
        <Button>Add to Cart</Button>
      </View>
    </View>
  );
};

export default ProductDetails;
