import React from "react";
import { View } from "react-native";
import { DataTable, Text } from "react-native-paper";
import IconsCell from "./IconsCell";

/**
 * Represents a single row of results for a single exercise. (ie: 3 sets of 10 reps)
 * @returns
 */
const DataRowResult = ({ result }) => {
  const formatResult = () => {
    let formattedResult = "";

    if (result.reps > 0) {
      formattedResult += `${result.reps} ${suffixMapingOptions["reps"]}, `;
    }
    if (result.weight) {
      formattedResult += `${result.weight}${suffixMapingOptions["weight"]}, `;
    }
    if (result.calories) {
      formattedResult += `${result.calories}${suffixMapingOptions["calories"]}, `;
    }
    if (result.distance) {
      formattedResult += `${result.distance}${suffixMapingOptions["distance"]}, `;
    }
    if (result.time) {
      formattedResult += `${result.time}${suffixMapingOptions["time"]}`;
    }
    // remove the last comma
    formattedResult = formattedResult.trim();
    if (formattedResult.endsWith(",")) {
      formattedResult = formattedResult.slice(0, -1);
    }
    return formattedResult;
  };

  return (
    <DataTable.Row>
      <DataTable.Cell>
        <Text>{result.setNumber}</Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <View>
          <Text>{formatResult()}</Text>
        </View>
      </DataTable.Cell>
      <IconsCell exerciseId={result.exerciseId} setNumber={result.setNumber} />
    </DataTable.Row>
  );
};

export default DataRowResult;

const suffixMapingOptions = {
  reps: "reps",
  weight: "kg",
  calories: "cals",
  distance: "m",
  time: "mn",
};
