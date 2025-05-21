import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "react-native-vector-icons";

const DrawerSidebar = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerSidebar.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#ffdead",
          drawerActiveTintColor: "#ff4500",
          drawerStyle: { backgroundColor: "#fffafa" },
        }}
      >
        <DrawerSidebar.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <DrawerSidebar.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </DrawerSidebar.Navigator>
    </NavigationContainer>
  );
}
