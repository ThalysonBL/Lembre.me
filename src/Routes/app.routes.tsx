import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home/index";
import { Tasks } from "../screens/Tasks/index";
import { MyDay } from "../screens/MyDay/index";
const { Navigator, Screen } = createBottomTabNavigator();
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
export function AppRoutes() {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="check-circle" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="MyDay"
        component={MyDay}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="target" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
