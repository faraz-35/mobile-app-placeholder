import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, Box } from "native-base";
import React from "react";
import { store } from "./src/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test1 from "./src/screens/Test1";
import Test2 from "./src/screens/Test2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Test1" component={Test1} />
            <Stack.Screen name="Test2" component={Test2} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
