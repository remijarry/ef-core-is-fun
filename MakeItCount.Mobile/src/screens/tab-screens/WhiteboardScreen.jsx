import React, { useEffect, useState } from "react";
import { View, Platform, StyleSheet, Pressable } from "react-native";
import { Card, SegmentedButtons, Text } from "react-native-paper";

import DefaultStyles from "../../styling/Styles";
import CombinedDefaultTheme from "../../styling/LightTheme";
import { ScrollView } from "react-native-gesture-handler";

import WeekPicker from "../../components/WeekPicker";

import AsyncStorage from "@react-native-async-storage/async-storage";

const jsonWorkouts = require("../../data/MakeItCount.Workouts.json");
let weekDictionary = new Map();
for (let workout of jsonWorkouts) {
  if (!weekDictionary.has(workout.week)) {
    weekDictionary.set(workout.week, []);
  }
  weekDictionary.set(workout.week, [
    ...weekDictionary.get(workout.week),
    workout,
  ]);
}

const WhiteboardScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);
  const [track, setTrack] = useState();
  const [selectedWeek, setSelectedWeek] = useState({});

  useEffect(() => {
    let track = "";
    let week = {};

    const getTrackAndWeek = async () => {
      try {
        AsyncStorage.removeItem("last-visited-week_pump");
        const lastVisitedTrack = await AsyncStorage.getItem(
          `last-visited-track`
        );
        if (lastVisitedTrack) {
          track = lastVisitedTrack;
        } else {
          track = "pump";
        }
        setTrack(track);
      } catch (e) {
        console.log(e);
      }

      try {
        const lastVisitedWeek = await AsyncStorage.getItem(`${track}`);
        if (lastVisitedWeek) {
          week = JSON.parse(lastVisitedWeek);
        } else {
          week = {
            yearWeek: 1,
            cycleNumber: 1,
            displayedWeek: 1,
            isCycleStarting: true,
            isBenchmark: false,
          };
        }
        setSelectedWeek(week);
      } catch (e) {
        console.log(e);
      }
    };

    if (track && week) {
      if (weekDictionary.has(week.yearWeek)) {
        let workouts = weekDictionary
          .get(week.yearWeek)
          .filter((w) => w.trackName === track);
        setWorkouts(workouts);
      }
    }

    getTrackAndWeek();
  }, []);

  useEffect(() => {
    if (track && selectedWeek) {
      if (weekDictionary.has(selectedWeek.yearWeek)) {
        let workouts = weekDictionary
          .get(selectedWeek.yearWeek)
          .filter((w) => w.trackName === track);
        setWorkouts(workouts);
      }
    }
  }, [track, selectedWeek]);

  /**
   * Handles the week selected event from the WeekPicker component.
   * @param {number} weekNumber The week number selected.
   */
  //TODO: rename with a on prefix
  const handleWeekSelected = (week) => {
    setSelectedWeek(week);
    saveLastVisitedWeekForTrack(track, week);
  };
  
  //TODO: rename with a on prefix
  const handleTrackSelected = (newTrack) => {
    saveLastVisitedWeekForTrack(track, JSON.stringify(selectedWeek));
    setTrack(newTrack);
    saveLastVisitedTrack(newTrack);
  };

  const saveLastVisitedTrack = async (track) => {
    await AsyncStorage.setItem(`last-visited-track`, track);
  };

  const saveLastVisitedWeekForTrack = async (track, week) => {
    await AsyncStorage.setItem(`${track}`, JSON.stringify(week));
  };

  const formatWorkoutShortDescription = (workoutDescription) => {
    let array = workoutDescription
      .replace("\n", "")
      .split("<br/>")
      .filter((line) => line !== "");
    return (
      <>
        {array.map(
          (line, index) =>
            line !== "" && (
              <Text key={index} variant="bodyLarge">
                {line}
              </Text>
            )
        )}
      </>
    );
  };

  return (
    <View style={DefaultStyles.container}>
      <WeekPicker
        selectedWeek={selectedWeek}
        onWeekSelected={handleWeekSelected}
      />
      <View>
        <SegmentedButtons
          theme={{
            colors: {
              secondaryContainer: CombinedDefaultTheme.colors.royalBlue,
              onSecondaryContainer: CombinedDefaultTheme.colors.text,
              outline: CombinedDefaultTheme.colors.royalBlue,
            },
          }}
          value={track}
          onValueChange={(value) => handleTrackSelected(value)}
          buttons={[
            {
              value: "pump",
              label: "Pump",
              labelStyle: {
                fontSize: Platform.OS === "ios" ? 14 : 12,
              },
            },
            {
              value: "persist",
              label: "Persist",
              labelStyle: {
                fontSize: Platform.OS === "ios" ? 14 : 12,
              },
            },
            {
              value: "minimalist",
              label: "Minimalist",
              labelStyle: {
                fontSize: Platform.OS === "ios" ? 14 : 12,
              },
            },
            {
              value: "pillars",
              label: "Pillars",
              labelStyle: {
                fontSize: Platform.OS === "ios" ? 14 : 12,
              },
            },
          ]}
          density="medium"
        />
      </View>

      {/* WORKOUTS */}
      <View
        style={{
          marginTop: 4,
          flex: 1,
        }}
      >
        <ScrollView>
          {workouts.map((workout) => (
            <Pressable
              key={workout.id}
              onPress={() => {
                navigation.navigate("WorkoutScreen", {
                  workout: workout,
                });
              }}
            >
              <Card style={styles.card}>
                <Card.Title
                  title={workout.title}
                  titleVariant={
                    Platform.OS === "ios" ? "titleLarge" : "titleMedium"
                  }
                />

                <Card.Content>
                  {formatWorkoutShortDescription(workout.shortDescription)}
                </Card.Content>
              </Card>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default WhiteboardScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  title: {
    textAlign: "center",
  },
  card: {
    margin: 8,
    marginHorizontal: 12,
    backgroundColor: CombinedDefaultTheme.colors.surface,
  },
});
