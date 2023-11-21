import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, DataTable, List, Text } from "react-native-paper";
import CombinedDefaultTheme from "../../styling/LightTheme";
import { useNavigation } from "@react-navigation/core";
import { WorkoutResultsContext } from "../../store/contexts/WorkoutResultsContext";

import DataRowResult from "./DataRowResult";

const ResultTable = ({ exercise, workoutId, workoutItemId }) => {
  const navigation = useNavigation();
  const context = useContext(WorkoutResultsContext);

  return (
    <List.Accordion key={exercise.id} id={exercise.id} title={exercise.name}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Set</DataTable.Title>
          <DataTable.Title>Achieved</DataTable.Title>
          <DataTable.Title>Action </DataTable.Title>
        </DataTable.Header>

        {context.exerciseResults.map(
          (result, index) =>
            result.exerciseId === exercise.id && (
              <DataRowResult key={index} result={result} />
            )
        )}

        <DataTable.Row>
          <DataTable.Cell>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <IconButton
                rippleColor={CombinedDefaultTheme.colors.background}
                style={style.circularButton}
                size={20}
                icon="plus-circle-outline"
                mode="contained"
                onPress={() =>
                  navigation.navigate("ResultModalScreen", {
                    exercise: exercise,
                    workoutId: workoutId,
                    workoutItemId: workoutItemId,
                  })
                }
              />
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </List.Accordion>
  );
};

export default ResultTable;

const style = StyleSheet.create({
  circularButton: {
    backgroundColor: CombinedDefaultTheme.colors.background,
  },
});
