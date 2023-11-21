import React, { useReducer, createContext } from "react";

import WorkoutResults from "../../models/WorkoutResults";

export const WorkoutResultsContext = createContext(null);
export const WorkoutResultsDispatchContext = createContext(null);

// stores the results for each exercise.
// Allows
const exerciseResultsMap = new Map();

export const WorkoutResultsProvider = ({ children }) => {
  const [workoutResults, dispatch] = useReducer(
    WorkoutResultsReducer,
    initialWorkoutResults
  );

  return (
    <WorkoutResultsContext.Provider value={workoutResults}>
      <WorkoutResultsDispatchContext.Provider value={dispatch}>
        {children}
      </WorkoutResultsDispatchContext.Provider>
    </WorkoutResultsContext.Provider>
  );
};

//TODO: move this to a separate file
const WorkoutResultsReducer = (state, action) => {
  switch (action.type) {
    case "TABLE_ROW_RESULT_ADDED": {
      const { workoutId, result } = action.payload;
      const newWorkoutResults = { ...state, workoutId };

      // calculate the set number
      if (!exerciseResultsMap.has(result.exerciseId)) {
        result.setNumber = 1;
        exerciseResultsMap.set(result.exerciseId, [result]);
      } else {
        result.setNumber = exerciseResultsMap.get(result.exerciseId).length + 1;
        exerciseResultsMap.get(result.exerciseId).push(result);
      }

      newWorkoutResults.exerciseResults.push(result);
      return {
        ...newWorkoutResults,
      };
    }

    case "TABLE_ROW_RESULT_EDITED": {
      const updatedExerciseResults = { ...action.payload };

      // update exerciseResults with this new exercise
      const exerciseResultIndex = state.exerciseResults.findIndex(
        (result) =>
          result.exerciseId === updatedExerciseResults.exerciseId &&
          result.setNumber === updatedExerciseResults.setNumber
      );

      const newExerciseResults = [...state.exerciseResults];
      newExerciseResults[exerciseResultIndex] = updatedExerciseResults;

      return {
        ...state,
        exerciseResults: newExerciseResults,
      };
    }

    case "TABLE_ROW_RESULT_DELETED": {
      const exerciseResultIndex = state.exerciseResults.findIndex(
        (result) =>
          result.exerciseId === action.payload.exerciseId &&
          result.setNumber === action.payload.setNumber
      );

      const exerciseToDelete = state.exerciseResults[exerciseResultIndex];

      const newExerciseResults = [...state.exerciseResults];
      newExerciseResults.splice(exerciseResultIndex, 1);

      exerciseResultsMap
        .get(exerciseToDelete.exerciseId)
        .splice((result) => result.setNumber !== exerciseToDelete.setNumber);

      // update the setNumber of the remaining results
      newExerciseResults.forEach((result, index) => {
        result.setNumber = index + 1;
      });

      return {
        ...state,
        exerciseResults: newExerciseResults,
      };
    }

    case "TABLE_ROW_RESULT_DUPLICATED": {
      const exerciseToDuplicate = state.exerciseResults.find((result) => {
        return (
          result.exerciseId === action.payload.exerciseId &&
          result.setNumber === action.payload.setNumber
        );
      });

      const duplicatedExercise = { ...exerciseToDuplicate };
      const newExerciseResults = [...state.exerciseResults];

      duplicatedExercise.setNumber =
        exerciseResultsMap.get(exerciseToDuplicate.exerciseId).length + 1;
      exerciseResultsMap
        .get(exerciseToDuplicate.exerciseId)
        .push(duplicatedExercise);

      newExerciseResults.push(duplicatedExercise);

      return {
        ...state,
        exerciseResults: newExerciseResults,
      };

      // let exerciseResults = state.exerciseResults.get(
      //   action.payload.exerciseId
      // );
      // const newExerciseResults = new Map(state.exerciseResults);
      // const result = { ...action.payload };
      // if (!exerciseResults) {
      //   result.setNumber = 1;

      //   newExerciseResults.set(action.payload.exerciseId, [result]);
      //   return {
      //     ...state,
      //     exerciseResults: newExerciseResults,
      //   };
      // } else {
      //   result.setNumber = exerciseResults.length + 1;
      //   exerciseResults.push(result);
      //   newExerciseResults.set(action.payload.exerciseId, exerciseResults);
      //   return {
      //     ...state,
      //     exerciseResults: newExerciseResults,
      //   };
      // }
    }

    case "SECTION_SET_ADDED": {
      return {
        ...state,
        nbSets: state.nbSets + 1,
      };
    }

    case "SECTION_SET_REMOVED": {
      const previousNbSets = state.nbSets;
      if (previousNbSets > 1) {
        return {
          ...state,
          nbSets: previousNbSets - 1,
        };
      } else {
        return state;
      }
    }

    case "WORKOUT_SECTION_SAVED": {
      console.log(state);
      return { ...state };
    }
  }
};

const initialWorkoutResults = new WorkoutResults();
