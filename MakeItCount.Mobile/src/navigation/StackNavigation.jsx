import CombinedDefaultTheme from "../styling/LightTheme";

import { PaperProvider, Button } from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavigation from "./BottomNavigation";
import WorkoutScreen from "../screens/stack-screens/regular-screens/WorkoutScreen";

import DefaultStyles from "../styling/Styles";

import PrepareScreen from "../screens/stack-screens/regular-screens/PrepareScreen";
import LogResultScreen from "../screens/stack-screens/regular-screens/LogResultScreen";
import ResultModalScreen from "../screens/stack-screens/modal-screens/ResultModalScreen";
import EditResultModalScreen from "../screens/stack-screens/modal-screens/EditResultModalScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: DefaultStyles.headerTitleStyle,
            headerBackTitleStyle: { color: "#FAFAFA" },
            headerTintColor: "#FAFAFA",
            headerTitleAlign: "center",
            headerBackgroundContainerStyle:
              CombinedDefaultTheme.colors.royalBlue,
          }}
        >
          {/* regular screens */}
          <Stack.Group>
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
            <Stack.Screen
              name="PrepareScreen"
              component={PrepareScreen}
              options={{
                title: "Prepare",
              }}
            />
            <Stack.Screen
              name="LogResultScreen"
              component={LogResultScreen}
              options={{
                title: "Log Result",
                headerRight: (props) => {
                  return (
                    <Button
                      labelStyle={{
                        fontSize: 17,
                        alignContent: "center",
                        margin: 0,
                      }}
                      textColor="white"
                    >
                      Save
                    </Button>
                  );
                },
              }}
            />
          </Stack.Group>
          {/* modal screens */}
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="ResultModalScreen"
              component={ResultModalScreen}
            />
            <Stack.Screen
              name="EditResultModalScreen"
              component={EditResultModalScreen}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default StackNavigation;
