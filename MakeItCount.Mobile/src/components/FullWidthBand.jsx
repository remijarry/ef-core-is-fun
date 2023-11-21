import React from "react";
import { View } from "react-native";

const FullWidthBand = ({ children }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {children}
    </View>
  );
};

export default FullWidthBand;
