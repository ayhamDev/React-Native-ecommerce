import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import colors from "../utils/colors";

const RadioButtonsGroup = (Props) => {
  return (
    <Props.container>
      {Props.data?.map((btn, index) => {
        return (
          <TouchableOpacity
            activeOpacity={Props.activeOpacity ? Props.activeOpacity : 0.25}
            key={index}
            onPress={() => {
              Props.SetSelected(index);
            }}
          >
            <btn.component selected={Props.selected}>
              <View
                style={{
                  width: Props.size,
                  height: Props.size,
                  borderWidth: 2,
                  borderColor:
                    Props.activeColor && Props.selected == index
                      ? Props.activeColor
                      : colors.primary,
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor:
                      Props.activeColor && Props.selected == index
                        ? Props.activeColor
                        : colors.primary,
                    flex: Props.selected == index ? 1 : 0,
                    borderRadius: 100,
                  }}
                />
              </View>
            </btn.component>
          </TouchableOpacity>
        );
      })}
    </Props.container>
  );
};

export default RadioButtonsGroup;
