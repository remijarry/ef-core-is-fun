import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

import { adaptNavigationTheme, MD3LightTheme } from "react-native-paper";

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    primary: "#0074B7",
    secondary: "rgb(198, 198, 204)",
    background: "#FBFCFA",
    card: "#0074B7",
    text: "rgb(255,255,255)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    black: "#000000",
    hotPink: "#FF0080",
    navyBlue: "#003B73",
    royalBlue: "#0074B7",
    blueGotto: "#60A3D9",
    babyBlue: "#BFD7ED",
    background: "#F0F0F0",
  },
};

export default CombinedDefaultTheme;
