import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import LightScreen from "../screens/lightScreen";
import MoistureScreen from "../screens/moistureScreen";
import TemperatureScreen from "../screens/temperatureScreen";
import NotificationsScreen from "../screens/notificationsScreen";
import SettingsScreen from "../screens/settingsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4C7352",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#F2F2F2",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Temperature"
          component={TemperatureScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Moisture"
          component={MoistureScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Light"
          component={LightScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
