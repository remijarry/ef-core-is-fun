import React, { useState, useLayoutEffect } from "react";

import { View, Text, ScrollView, StyleSheet } from "react-native";

import { List } from "react-native-paper";

import DefaultStyles from "../../../styling/Styles";
import DefaultButton from "../../../components/DefaultButton";

const WorkoutScreen = ({ route, navigation }) => {
  const [workout, setWorkout] = useState({});

  useLayoutEffect(() => {
    const workout = route.params.workout;
    navigation.setOptions({
      headerTitle: workout.title,
    });
    setWorkout(workout);
  }, []);

  return (
    <View style={DefaultStyles.container}>
      <ScrollView>
        {/* WARMUP */}
        <List.Section>
          <List.Accordion title="Warmup" titleStyle={styles.accordionTitle}>
            <Text style={styles.text} variant="bodyLarge">
              {workout.warmupDescription}
            </Text>
          </List.Accordion>
        </List.Section>

        {/* WORKOUT */}
        {workout?.workoutItems?.map((workoutItem, index) => (
          <List.Section key={workoutItem.id + "-" + index}>
            <List.Accordion
              title={workoutItem.name}
              titleStyle={styles.accordionTitle}
            >
              <Text style={styles.text}>{workoutItem.info}</Text>
              <View style={styles.buttonsContainer}>
                {index > 0 && (
                  <>
                    <DefaultButton
                      labelStyle={{
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                      onPress={() =>
                        navigation.navigate("PrepareScreen", {
                          exercises: workoutItem.selectedExercises,
                        })
                      }
                    >
                      PREPARE
                    </DefaultButton>
                    <DefaultButton
                      labelStyle={{
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                      onPress={() =>
                        navigation.navigate("LogResultScreen", {
                          workoutId: workout.id,
                          workoutItemId: workoutItem.id,
                          exercises: workoutItem.selectedExercises,
                        })
                      }
                    >
                      LOG RESULT
                    </DefaultButton>
                  </>
                )}
              </View>
            </List.Accordion>
          </List.Section>
        ))}

        {/* COOLDOWN */}
        <List.Section>
          <List.Accordion
            title="Cooldown"
            descriptionStyle={{
              backgroundColor: "green",
            }}
            titleStyle={styles.accordionTitle}
          >
            <Text style={styles.text} variant="bodyLarge">
              {workout.cooldownDescription}
            </Text>
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </View>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  accordionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    paddingHorizontal: 16,
    fontSize: 17,
    letterSpacing: 0.5,
    lineHeight: 25,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },
});
