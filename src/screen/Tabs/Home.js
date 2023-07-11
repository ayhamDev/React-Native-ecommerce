import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useRef } from "react";
import Appbar from "../../components/Appbar";
import Products from "../../components/Products";
import colors from "../../utils/colors";

const Home = ({ navigation }) => {
  const ProductsList = [
    {
      img: require("../../../assets/demo/cloth1.png"),
      title: "Cotton queen T",
      price: (33).toFixed(2),
    },
    {
      img: require("../../../assets/demo/cloth2.png"),
      title: "Cotton Style T",
      price: (52).toFixed(2),
    },
    {
      img: require("../../../assets/demo/cloth3.png"),
      title: "Cotton Style T",
      price: (21).toFixed(2),
    },
    {
      img: require("../../../assets/demo/cloth4.png"),
      title: "Cotton Style T",
      price: (73).toFixed(2),
    },
    {
      img: require("../../../assets/demo/cloth1.png"),
      title: "Cotton queen T",
      price: (33).toFixed(2),
    },
    {
      img: require("../../../assets/demo/cloth2.png"),
      title: "Cotton Style T",
      price: (52).toFixed(2),
    },
    {
      img: require("../../../assets/demo/cloth3.png"),
      title: "Cotton Style T",
      price: (21).toFixed(2),
    },
    {
      img: require("../../../assets/demo/cloth4.png"),
      title: "Cotton Style T",
      price: (73).toFixed(2),
    },
  ];
  return (
    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll={true}
    >
      <Appbar navigation={navigation} />
      <Text
        style={{
          paddingHorizontal: 32,
          marginTop: 15,
          marginBottom: 25,
          fontFamily: "quicksand b",
          fontSize: 24,
          paddingRight: 100,
        }}
      >
        Find the <Text style={{ color: colors.secondary }}>best fit</Text> for
        all your needs!
      </Text>

      <View
        style={{
          paddingHorizontal: 32,
        }}
      >
        <Text
          style={{
            fontFamily: "quicksand m",
            fontSize: 16,
            paddingRight: 100,
          }}
        >
          Popular Products
        </Text>
        <Products navigation={navigation} products={ProductsList} />
      </View>
    </ScrollView>
  );
};

export default Home;
