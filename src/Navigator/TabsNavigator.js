import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screen/Tabs/Home";
import Liked from "../screen/Tabs/Liked";
import Profile from "../screen/Tabs/Profile";
const Tabs = createBottomTabNavigator();

import { AntDesign } from "@expo/vector-icons";
import colors from "../utils/colors";
import { Text, TouchableOpacity, View } from "react-native";
const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      tabBar={(props) => {
        return (
          <View style={{ position: "relative" }}>
            <View
              style={{
                position: "absolute",
                width: "400%",
                height: 775,
                top: -25,
                borderTopStartRadius: 1000,
                borderTopEndRadius: 1000,
                left: "-150%",
                backgroundColor: "white",
                elevation: 24,
              }}
            ></View>
            <BottomTabBar {...props}></BottomTabBar>
          </View>
        );
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          height: 72.5,
          paddingVertical: 5,
          paddingHorizontal: 25,
        },
        tabBarButton: (props) => {
          return (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                flexDirection: "column",
              }}
              activeOpacity={0.5}
            ></TouchableOpacity>
          );
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    textAlign: "center",
                    marginBottom: 15,
                    fontFamily: `quicksand ${focused ? "b" : "m"}`,
                    color: focused ? colors.secondary : colors.primary,
                  }}
                >
                  Home
                </Text>
                <View
                  style={{
                    position: "absolute",
                    height: focused ? 5 : 0,
                    width: "100%",
                    backgroundColor: colors.secondary,
                    borderTopStartRadius: 10,
                    borderTopEndRadius: 10,
                    bottom: 0,
                  }}
                ></View>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name={"home"}
                size={24}
                color={focused ? colors.secondary : colors.primary}
              />
            );
          },
        }}
        name="home"
        component={Home}
      />

      <Tabs.Screen
        name="liked"
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    textAlign: "center",
                    marginBottom: 15,
                    fontFamily: `quicksand ${focused ? "b" : "m"}`,
                    color: focused ? colors.secondary : colors.primary,
                  }}
                >
                  Liked
                </Text>
                <View
                  style={{
                    position: "absolute",
                    height: focused ? 5 : 0,
                    width: "100%",
                    backgroundColor: colors.secondary,
                    borderTopStartRadius: 10,
                    borderTopEndRadius: 10,
                    bottom: 0,
                  }}
                ></View>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name={focused ? "heart" : "hearto"}
                size={24}
                color={focused ? colors.secondary : colors.primary}
              />
            );
          },
        }}
        component={Liked}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    textAlign: "center",
                    marginBottom: 15,
                    fontFamily: `quicksand ${focused ? "b" : "m"}`,
                    color: focused ? colors.secondary : colors.primary,
                  }}
                >
                  Home
                </Text>
                <View
                  style={{
                    position: "absolute",
                    height: focused ? 5 : 0,
                    width: "100%",
                    backgroundColor: colors.secondary,
                    borderTopStartRadius: 10,
                    borderTopEndRadius: 10,
                    bottom: 0,
                  }}
                ></View>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="user"
                size={24}
                color={focused ? colors.secondary : colors.primary}
              />
            );
          },
        }}
        name="profile"
        component={Profile}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
