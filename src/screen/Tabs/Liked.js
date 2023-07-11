import { View, Text, ScrollView } from "react-native";
import React from "react";
import Appbar from "../../components/Appbar";
import SearchBar from "../../components/SearchBar";
import Products from "../../components/Products";
import colors from "../../utils/colors";

const Liked = ({ navigation }) => {
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
      <Appbar />

      <Text
        style={{
          paddingHorizontal: 32,
          marginTop: 15,
          fontFamily: "quicksand b",
          fontSize: 24,
          paddingRight: 100,
        }}
      >
        Liked
      </Text>

      <View
        style={{
          paddingHorizontal: 32,
        }}
      >
        <Products navigation={navigation} products={ProductsList} />
      </View>
    </ScrollView>
  );
};

export default Liked;
