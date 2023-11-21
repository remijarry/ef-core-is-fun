import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import CombinedDefaultTheme from "../styling/LightTheme";

/**
 * Cycle component. Represents 1 cycle of the program (6 weeks by default, 7 weeks when there is a benchmark week).
 * @returns
 */
const Cycle = ({ selectedWeek, onWeekSelected, weeks }) => {
  return (
    <>
      <View style={styles.outterNumbersContainer}>
        {weeks.map((week) => (
          <Pressable key={week.yearWeek} onPress={() => onWeekSelected(week)}>
            <View
              style={
                selectedWeek.yearWeek === week.yearWeek
                  ? [styles.innerNumberContainer, styles.selectedContainer]
                  : styles.innerNumberContainer
              }
            >
              <Text
                style={
                  selectedWeek.yearWeek === week.yearWeek
                    ? [styles.number, styles.selectedNumber]
                    : styles.number
                }
              >
                {week.displayedWeek}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outterNumbersContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 8,
  },
  innerNumberContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    padding: 0,
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    letterSpacing: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  number: {
    fontWeight: "400",
    fontSize: 18,
  },
  selectedContainer: {
    backgroundColor: CombinedDefaultTheme.colors.royalBlue,
  },
  selectedNumber: {
    color: "white",
    fontWeight: "500",
  },
  benchmarkWeek: {
    backgroundColor: CombinedDefaultTheme.colors.navyBlue,
  },
});

export default Cycle;
