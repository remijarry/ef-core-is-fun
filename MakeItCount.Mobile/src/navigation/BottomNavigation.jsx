import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PaperProvider } from "react-native-paper";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import WhiteboardScreen from "../screens/tab-screens/WhiteboardScreen";
import Stretches from "../screens/tab-screens/StretchesScreen";
import CombinedDefaultTheme from "../styling/LightTheme";
import { Platform } from "react-native";
import DefaultStyles from "../styling/Styles";

const Tab = createBottomTabNavigator();

/**
 * This is a BottomNavigation component. It uses react-navigation/bottom-tabs.
 * It is combined with the StackNavigation component in the StackNavigation.jsx file.
 */
const BottomNavigation = () => {
  return (
    <>
      <PaperProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerTitleStyle: DefaultStyles.headerTitleStyle,
            headerTitleAlign: "center",
            headerBackgroundContainerStyle:
              CombinedDefaultTheme.colors.royalBlue,
            tabBarStyle: {
              backgroundColor: "#E0E0E0",
              height: Platform.OS === "ios" ? 90 : 60,
              paddingBottom: Platform.OS === "ios" ? 30 : 8,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Stretches") {
                iconName = focused ? "body" : "body-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              } else if (route.name === "Whiteboard") {
                iconName = focused
                  ? "chalkboard-teacher"
                  : "chalkboard-teacher";
                return (
                  <FontAwesome5 name={iconName} size={size} color={color} />
                );
              } else if (route.name === "Profile") {
                iconName = focused ? "user-alt" : "user-alt";
                return (
                  <FontAwesome5 name={iconName} size={size} color={color} />
                );
              }
            },
            tabBarInactiveTintColor: CombinedDefaultTheme.colors.black,
            tabBarActiveTintColor: CombinedDefaultTheme.colors.royalBlue,
          })}
        >
          <Tab.Screen
            name="Whiteboard"
            component={WhiteboardScreen}
            options={{
              headerTitle: "Whiteboard",
            }}
          />
          <Tab.Screen name="Stretches" component={Stretches} />
        </Tab.Navigator>
      </PaperProvider>
    </>
  );
};

export default BottomNavigation;
