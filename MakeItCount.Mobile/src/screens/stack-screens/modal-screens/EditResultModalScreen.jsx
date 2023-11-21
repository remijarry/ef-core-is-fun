import React, { useContext, useLayoutEffect, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";

import DefaultStyles from "../../../styling/Styles";
import { Button, Switch, TextInput } from "react-native-paper";
import ExerciseResult from "../../../models/ExerciseResult";
import {
  WorkoutResultsContext,
  WorkoutResultsDispatchContext,
} from "../../../store/contexts/WorkoutResultsContext";

const EditResultModalScreen = ({ route, navigation }) => {
  const [exerciseResult, setExerciseResult] = useState(
    new ExerciseResult(route.params.result)
  );

  const context = useContext(WorkoutResultsContext);
  const dispatch = useContext(WorkoutResultsDispatchContext);

  useLayoutEffect(() => {
    const exercise = context.exerciseResults.find((exercise) => {
      return (
        exercise.exerciseId === route.params.exerciseId &&
        exercise.setNumber === route.params.setNumber
      );
    });

    if (exercise) {
      navigation.setOptions({
        headerTitle: exercise.name,
      });
      setExerciseResult((prevResult) => {
        return {
          ...exercise,
        };
      });
    }
  }, []);

  const onSwitchValueChange = (inputLabel) => {
    setExerciseResult((prevResult) => {
      return {
        ...prevResult,
        [inputLabel]: prevResult[inputLabel] === null ? "" : null,
      };
    });
  };

  const onTextValueChange = (inputLabel, inputText) => {
    setExerciseResult((prevResult) => {
      return {
        ...prevResult,
        [inputLabel]: inputText,
      };
    });
  };

  const onSave = () => {
    dispatch({
      type: "TABLE_ROW_RESULT_EDITED",
      payload: exerciseResult,
    });
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={DefaultStyles.container}>
        <View style={DefaultStyles.container}>
          <View style={styles.inner}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                style={{
                  flex: 1,
                }}
                value={exerciseResult.reps !== null ? true : false}
                onValueChange={() => onSwitchValueChange("reps")}
              />
              <TextInput
                style={{
                  flex: 3,
                }}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                disabled={exerciseResult.reps === null}
                mode="outlined"
                label={"reps"}
                onChangeText={(text) => onTextValueChange("reps", text)}
                value={exerciseResult.reps === null ? "" : exerciseResult.reps}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                style={{
                  flex: 1,
                }}
                value={exerciseResult.weight !== null ? true : false}
                onValueChange={() => onSwitchValueChange("weight")}
              />
              <TextInput
                style={{
                  flex: 3,
                }}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                disabled={exerciseResult.weight === null}
                mode="outlined"
                label={"weight"}
                onChangeText={(text) => onTextValueChange("weight", text)}
                value={
                  exerciseResult.weight === null ? "" : exerciseResult.weight
                }
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                style={{
                  flex: 1,
                }}
                value={exerciseResult.calories !== null ? true : false}
                onValueChange={() => onSwitchValueChange("calories")}
              />
              <TextInput
                style={{
                  flex: 3,
                }}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                disabled={exerciseResult.calories === null}
                mode="outlined"
                label={"calories"}
                onChangeText={(text) => onTextValueChange("calories", text)}
                value={
                  exerciseResult.calories === null
                    ? ""
                    : exerciseResult.calories
                }
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                style={{
                  flex: 1,
                }}
                value={exerciseResult.distance !== null ? true : false}
                onValueChange={() => onSwitchValueChange("distance")}
              />
              <TextInput
                style={{
                  flex: 3,
                }}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                disabled={exerciseResult.distance === null}
                mode="outlined"
                label={"distance"}
                onChangeText={(text) => onTextValueChange("distance", text)}
                value={
                  exerciseResult.distance === null
                    ? ""
                    : exerciseResult.distance
                }
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                style={{
                  flex: 1,
                }}
                value={exerciseResult.time !== null ? true : false}
                onValueChange={() => onSwitchValueChange("time")}
              />
              <TextInput
                style={{
                  flex: 3,
                }}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                disabled={exerciseResult.time === null}
                mode="outlined"
                label={"time"}
                onChangeText={(text) => onTextValueChange("time", text)}
                value={exerciseResult.time === null ? "" : exerciseResult.time}
              />
            </View>
          </View>
          <Button style={styles.button} mode="contained" onPress={onSave}>
            SAVE
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditResultModalScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
  },
});
