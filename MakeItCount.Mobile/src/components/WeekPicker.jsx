import React, { useEffect } from "react";

import { Pressable, View } from "react-native";

import DefaultStyles from "../styling/Styles";
import CombinedDefaultTheme from "../styling/LightTheme";

import { Button, Dialog, IconButton, Portal, Text } from "react-native-paper";

import Cycle from "./Cycle";

const cycleStartWeeks = [1, 7, 14, 20, 27, 33, 40, 46, 53];
const benchmarkWeeks = new Set([13, 26, 39, 52]);

let weeks = [];
for (let week = 0; week < cycleStartWeeks.length - 1; week++) {
  let current = [];
  let i = cycleStartWeeks[week];
  let j = 1;
  while (i < cycleStartWeeks[week + 1]) {
    current.push({
      cycleNumber: week + 1,
      yearWeek: i,
      displayedWeek: benchmarkWeeks.has(i) ? "*" : j++, // cycles are 6 weeks long
      isCycleStarting: i === week ? true : false,
      isBenchmark: benchmarkWeeks.has(i),
    });
    i++;
  }
  weeks.push(current);
}

const WeekPicker = ({ selectedWeek, onWeekSelected }) => {
  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);
  const [dialogVisible, setDialogVisible] = React.useState(false);

  useEffect(() => {
    hideDialog();
  }, [selectedWeek]);

  return (
    <>
      <Pressable
        onPress={showDialog}

      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 8,
            marginBottom: 4,
            height: 42,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text
              variant="headlineMedium"
              style={{
                fontWeight: "bold",
              }}
            >
              WEEK {selectedWeek.displayedWeek}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: 4,
              }}
            >
              cycle {selectedWeek.cycleNumber}
            </Text>
          </View>
          <IconButton
            icon="chevron-down"
            iconColor={CombinedDefaultTheme.colors.royalBlue}
            size={24}
          />
        </View>
      </Pressable>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
          <View
            style={{
              fontSize: 24,
              letterSpacing: DefaultStyles.title.letterSpacing,
              textAlign: "center",
              backgroundColor: CombinedDefaultTheme.colors.royalBlue,
              color: "white",
              marginHorizontal: 0,
              marginTop: 0,
              overflow: "hidden",
              borderTopRightRadius: 28,
              borderTopLeftRadius: 28,
            }}
          >
            <Dialog.Title
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 26,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 26,
                }}
              >
                Select a week
              </Text>
            </Dialog.Title>
          </View>
          <Dialog.Content
            backgroundColor={CombinedDefaultTheme.colors.babyBlue}
            style={{
              borderBottomRightRadius: 28,
              borderBottomLeftRadius: 28,
            }}
          >
            <Text
              variant="bodySmall"
              style={{ color: "black", textAlign: "left" }}
            >
              *each row represents one cycle
            </Text>
            <Text
              variant="bodySmall"
              style={{ color: "black", textAlign: "left" }}
            >
              *a star represents a benchmark week
            </Text>
            {weeks.map((week, index) => (
              <Cycle
                key={index}
                weeks={week}
                onWeekSelected={onWeekSelected}
                selectedWeek={selectedWeek}
              />
            ))}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  );
};

export default WeekPicker;
