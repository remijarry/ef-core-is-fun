import React from "react";
import { Button } from "react-native-paper";
import CombinedDefaultTheme from "../styling/LightTheme";

const DefaultButton = (props) => {
  return (
    <Button
      theme={{
        colors: {
          primary: CombinedDefaultTheme.colors.royalBlue,
        },
      }}
      {...props}
    />
  );
};

export default DefaultButton;
