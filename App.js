import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import TabsNavigator from "./src/Navigator/TabsNavigator";
import ProductDetails from "./src/screen/Stack/ProductDetails";

import { SheetProvider } from "react-native-actions-sheet";
import "./src/screen/Stack/Cart.js";
import Onboarding from "./src/screen/Stack/Onboarding";

SplashScreen.hideAsync();

const Stack = createStackNavigator();
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
    <SheetProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="white" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "vertical",
            transitionSpec: {
              open: {
                animation: "spring",
                config: {
                  stiffness: 1000,
                  damping: 500,
                  mass: 5,
                  overshootClamping: true,
                  restDisplacementThreshold: 0.001,
                  restSpeedThreshold: 0.01,
                },
              },
              close: {
                animation: "spring",
                config: {
                  stiffness: 1500,
                  damping: 500,
                  mass: 5,
                  overshootClamping: true,
                  restDisplacementThreshold: 0.001,
                  restSpeedThreshold: 10,
                },
              },
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="tabs" component={TabsNavigator} />
          <Stack.Screen
            name="product"
            component={ProductDetails}
            screenOptions={{}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SheetProvider>
  );
}
