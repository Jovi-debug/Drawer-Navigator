import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          tabBarActiveTintColor: "20b2aa",
        }}
      >
        <BottomTabNav.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTabNav.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTabNav.Navigator>
    </NavigationContainer>
  );
}
