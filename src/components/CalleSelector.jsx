import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons, useTheme } from "react-native-paper";

const CalleSelector = () => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  return (
    <SafeAreaView>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "8",
            label: "Calle 8",
          },
          {
            value: "9",
            label: "Calle 9",
          },
          {
            value: "10",
            label: "Calle 10",
          },
          {
            value: "11",
            label: "Calle 11",
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default CalleSelector;
