import React from "react";
import { View, Text } from "react-native";

import DefaultStyles from "../../styling/Styles";
import VideoAccordion from "../../components/VideoAccordion";
import { ScrollView } from "react-native-gesture-handler";

let recoveryItems = require("../../data/recoveryItems.json");
recoveryItems = recoveryItems.sort((a, b) => {
  return a.title.localeCompare(b.title);
});

const Stretches = () => {
  return (
    <View style={DefaultStyles.container}>
      <ScrollView>
        {recoveryItems.map((item) => (
          <VideoAccordion
            key={item.id}
            accordionTitle={item.title}
            accordionId={item.id}
            videoId={item.selected_exercises[0].videoId}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stretches;
