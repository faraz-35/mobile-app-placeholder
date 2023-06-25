import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text } from "native-base";
import { useFonts } from "expo-font";

import { store } from "@src/store";
import nativeBaseTheme from "@src/UI/theme";
import TestStack from "@src/stacks/testStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require("./assets/font/inter/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <Provider store={store}>
        <TestStack />
        <StatusBar style="auto" />
        <Text style={{ fontSize: 40 }}>testing</Text>
      </Provider>
    </NativeBaseProvider>
  );
}
