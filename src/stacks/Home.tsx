import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { Button, HStack } from "native-base";

import Home from "@src/screens/Home";
import Profile from "@src/screens/Profile";
import ScreenHeader from "@src/components/globals/screenHeader";

const BottomTab: React.FC<BottomTabBarProps> = ({ navigation }) => {
  const navigateHome = () => navigation.navigate("Home");
  const navigateProfile = () => navigation.navigate("Profile");

  return (
    <HStack width="100%" justifyContent="center" space={2}>
      <Button onPress={navigateHome}>Home</Button>
      <Button onPress={navigateProfile}>Profile</Button>
    </HStack>
  );
};

type HomeTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const HomeTab: React.FC = () => {
  const Tab = createBottomTabNavigator<HomeTabParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ header: ScreenHeader }}
        tabBar={(props) => <BottomTab {...props} />}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
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
