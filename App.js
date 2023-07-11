import { useCallback, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./src/Navigator/TabsNavigator";
SplashScreen.hideAsync();
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    quicksand: require("./assets/fonts/Quicksand-Regular.ttf"),
    "quicksand m": require("./assets/fonts/Quicksand-Medium.ttf"),
    "quicksand b": require("./assets/fonts/Quicksand-Bold.ttf"),
  });
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // animation:
        }}
      >
        <Stack.Screen name="tabs" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
