import { useRef, useState } from "react";
import { View, Text } from "react-native";
import ActionSheet, {
  ScrollView,
  useScrollHandlers,
} from "react-native-actions-sheet";
import { registerSheet } from "react-native-actions-sheet";

import ShoppingCart from "../../components/CartSteps/ShoppingCart";
import CheckoutOrder from "../../components/CartSteps/CheckoutOrder";
import OrderSuccess from "../../components/CartSteps/OrderSuccess";

registerSheet("cart", (props) => {
  const actionSheetRef = useRef(null);
  const stepTitle = ["Shopping Cart", "Checkout Order", "Order Success"];
  const [Step] = useState([ShoppingCart, CheckoutOrder, OrderSuccess]);
  const [SelectedStep, SetSelectedStep] = useState(0);

  const scrollHandlers = useScrollHandlers("scrollview-1", actionSheetRef);
  const ConditionalComponent = () => {
    switch (SelectedStep) {
      case 0:
        return (
          <ShoppingCart
            scrollHandlers={scrollHandlers}
            SetSelectedStep={SetSelectedStep}
          />
        );
      case 1:
        return <CheckoutOrder SetSelectedStep={SetSelectedStep} />;
      case 2:
        return <OrderSuccess />;
      default:
        return <ShoppingCart />;
    }
  };
  return (
    <ActionSheet
      containerStyle={{
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
      indicatorStyle={{
        marginTop: 10,
        width: 100,
      }}
      ref={actionSheetRef}
      id={props.sheetId}
      snapPoints={[40, 100]}
      initialSnapIndex={0}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      defaultOverlayOpacity={0.3}
    >
      <Text
        style={{
          fontFamily: "quicksand b",
          fontSize: 24,
          textAlign: "center",
        }}
      >
        {stepTitle[SelectedStep]}
      </Text>
      <ConditionalComponent />
    </ActionSheet>
  );
});
export {};
