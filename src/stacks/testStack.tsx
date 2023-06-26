import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UITest from "@src/screens/Test";

const TestStack: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UITest" component={UITest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TestStack;
