import React, { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { IconButton, List, Button } from "react-native-paper";
import DefaultStyles from "../../../styling/Styles";

import BoldTitle from "../../../components/BoldTitle";
import CombinedDefaultTheme from "../../../styling/LightTheme";

import ResultTable from "../../../components/LogResults/ResultTable";

import {
  WorkoutResultsContext,
  WorkoutResultsDispatchContext,
} from "../../../store/contexts/WorkoutResultsContext";

// what is tempo, exercise breakdown etc..
const excludedExercises = new Set([
  "6403006",
  "6800772",
  "6703332",
  "7717900",
  "7873818",
  "7691641",
  "7941655",
  "7717908",
  "7948611",
  "6704775",
  "6704521",
  "6846461",
  "6836532",
  "6704766",
  "8823183",
  "7718160",
  "7839992",
  "7854650",
  "8852132",
  "8826448",
  "8851972",
  "8826730",
  "7941529",
  "7912567",
  "7941582",
  "7916868",
  "8880543",
  "8880525",
  "8880548",
  "7948620",
  "8880835",
  "6704706",
  "7941539",
  "8912524",
  "6836385",
  "7690888",
  "8937495",
  "6836529",
  "5815207",
  "8757424",
  "6836439",
  "8941663",
  "8941666",
  "8944886",
  "7690813",
  "6704617",
  "9512033",
  "9572866",
  "9512470",
  "8912520",
  "9773362",
  "9778679",
  "9534175",
  "9778466",
  "9907327",
  "9779211",
  "10166378",
  "7941556",
  "7941612",
]);

const LogResultScreen = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          labelStyle={{
            fontSize: 17,
            alignContent: "center",
            margin: 0,
          }}
          textColor="white"
          onPress={() => {
            dispatch({
              type: "WORKOUT_SECTION_SAVED",
              payload: {
                workoutId: workoutId,
                workoutItemId: workoutItemId,
              },
            });
          }}
        >
          Save
        </Button>
      ),
    });
  }, []);

  const { exercises, workoutId, workoutItemId } = route.params;
  const context = useContext(WorkoutResultsContext);
  const dispatch = useContext(WorkoutResultsDispatchContext);

  return (
    <View style={DefaultStyles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <BoldTitle> {context.nbSets} Sets</BoldTitle>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <IconButton
            rippleColor={CombinedDefaultTheme.colors.background}
            style={style.circularButton}
            icon="minus-circle-outline"
            mode="contained"
            onPress={() => {
              dispatch({
                type: "SECTION_SET_REMOVED",
              });
            }}
          />
          <IconButton
            rippleColor={CombinedDefaultTheme.colors.background}
            style={style.circularButton}
            icon="plus-circle-outline"
            mode="contained"
            onPress={() => {
              dispatch({
                type: "SECTION_SET_ADDED",
              });
            }}
          />
        </View>
      </View>

      <ScrollView>
        <List.Section>
          {exercises
            .filter((exercise) => !excludedExercises.has(exercise.id))
            .map((exercise, index) => (
              <ResultTable
                key={index}
                exercise={exercise}
                workoutId={workoutId}
                workoutItemId={workoutItemId}
              />
            ))}
        </List.Section>
      </ScrollView>
    </View>
  );
};

export default LogResultScreen;

const style = StyleSheet.create({
  circularButton: {
    backgroundColor: CombinedDefaultTheme.colors.background,
  },
});
