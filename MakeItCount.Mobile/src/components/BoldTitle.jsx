import React from "react";
import { Text } from "react-native-paper";
import CombinedDefaultTheme from "../styling/LightTheme";
import DefaultStyles from "../styling/Styles";

const BoldTitle = ({ children }) => {
  return (
    <Text
      style={[
        DefaultStyles.subtitleBold,
        {
          color: CombinedDefaultTheme.colors.blueGotto,
          fontWeight: "bold",
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default BoldTitle;
