import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Login from "@src/screens/Login";
import Signup from "@src/screens/Signup";
import ScreenHeader from "@src/components/globals/screenHeader";

type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const AuthStack: React.FC = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: ScreenHeader }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type AuthStackNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const useAuthNavigation = (): AuthStackNavigationProp => {
  return useNavigation();
};

export { useAuthNavigation };
export default AuthStack;
