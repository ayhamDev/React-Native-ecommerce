import { View, Text } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { registerSheet } from "react-native-actions-sheet";
import React from "react";

registerSheet("example-sheet", (props) => {
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
});
export {};
