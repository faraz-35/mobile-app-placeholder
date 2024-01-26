import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import Home from "@src/screens/Home";
import { Button, HStack } from "native-base";

const BottomTab: React.FC<BottomTabBarProps> = ({ navigation }) => {
  const navigateHome = () => navigation.navigate("Home");
  return (
    <HStack width="100%" justifyContent="center">
      <Button onPress={navigateHome}>Home</Button>
    </HStack>
  );
};

type HomeTabParamList = {
  Home: undefined;
};

const HomeTab: React.FC = () => {
  const Tab = createBottomTabNavigator<HomeTabParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

type HomeTabNavigationProp = BottomTabNavigationProp<HomeTabParamList>;

const useTabNavigation = (): HomeTabNavigationProp => {
  return useNavigation();
};

export { useTabNavigation };
export default HomeTab;
