import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";

import {
  adaptNavigationTheme,
  MD3DarkTheme,
} from "react-native-paper";

const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

export default CombinedDarkTheme;
