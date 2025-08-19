// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@react-navigation/elements";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Details")}>
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>Details Screen</Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
