import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";

import { store, useAppSelector } from "@src/store";
import nativeBaseTheme from "@src/UI/theme";
import AuthStack from "@src/stacks/Auth";

function Main() {
  const user = useAppSelector((state) => state.user.data);

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <StatusBar style="auto" />
      {user ? <></> : <AuthStack />}
    </NativeBaseProvider>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require("./assets/font/inter/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
