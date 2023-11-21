import React from "react";
import { View } from "react-native";
import { List, Text } from "react-native-paper";
import FullWidthBand from "../../../components/FullWidthBand";
import BoldTitle from "../../../components/BoldTitle";
import VideoAccordion from "../../../components/VideoAccordion";

const PrepareScreen = ({ route }) => {
  const exercises = route.params.exercises;
  return (
    <>
      <View>
        <BoldTitle>Workout history</BoldTitle>
        <FullWidthBand>
          <Text
            style={{
              margin: 8,
              paddingVertical: 10,
              fontWeight: "bold",
            }}
          >
            No history for this workout.
          </Text>
        </FullWidthBand>
      </View>
      <View>
        <BoldTitle>Movement instructions</BoldTitle>
        <List.AccordionGroup>
          {exercises &&
            exercises.map((exercise) => (
              <VideoAccordion
                key={exercise.id}
                accordionTitle={exercise.name}
                accordionId={exercise.id}
                videoId={exercise.videoId}
              />
            ))}
        </List.AccordionGroup>
      </View>
    </>
  );
};

export default PrepareScreen;
