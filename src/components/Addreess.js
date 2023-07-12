import { View, Text } from "react-native";
import React, { useState } from "react";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { ScrollView } from "react-native";
import colors from "../utils/colors";

const Addreess = () => {
  const [selectedAddress, SetSelectedAddress] = useState(0);

  const Address = [
    {
      component: (props) => {
        return (
          <View
            style={{
              flexDirection: "row",
              marginLeft: 32,
              gap: 16,
              width: 240,
              height: 120,
              backgroundColor:
                props.selected == 0 ? colors.secondary : colors.white,
              padding: 20,
              borderRadius: 15,
            }}
          >
            {props.children}
            <Text
              style={{
                flex: 1,
                flexWrap: "wrap",
                color: props.selected == 0 ? "white" : colors.primary,
              }}
            >
              fkwejfoiewjfiowejfiowejfiowjfiowjfiowefw
              efweijfoiwejfioewjfiowjefjweifeiwofw
              fwefhwuiefhiuwehfuwejfoiwejfiowejfiowejfiowjefi
            </Text>
          </View>
        );
      },
    },
    {
      component: (props) => {
        return (
          <View
            style={{
              flexDirection: "row",
              marginLeft: 16,
              marginRight: 32,

              gap: 16,
              width: 240,
              height: 120,
              backgroundColor:
                props.selected == 1 ? colors.secondary : colors.white,
              padding: 20,
              borderRadius: 15,
            }}
          >
            {props.children}
            <Text
              style={{
                flex: 1,
                flexWrap: "wrap",
                color: props.selected == 1 ? "white" : colors.primary,
              }}
            >
              fkwejfoiewjfiowejfiowejfiowjfiowjfiowefw
              efweijfoiwejfioewjfiowjefjweifeiwofw
              fwefhwuiefhiuwehfuwejfoiwejfiowejfiowejfiowjefi
            </Text>
          </View>
        );
      },
    },
  ];
  return (
    <RadioButtonsGroup
      container={(props) => {
        return (
          <ScrollView
            bounces={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {props.children}
            </View>
          </ScrollView>
        );
      }}
      activeColor={"white"}
      activeOpacity={0.6}
      selected={selectedAddress}
      SetSelected={SetSelectedAddress}
      size={25}
      data={Address}
    />
  );
};

export default Addreess;
