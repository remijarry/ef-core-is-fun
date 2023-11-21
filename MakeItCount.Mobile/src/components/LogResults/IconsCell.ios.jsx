import React, { useContext, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { IconButton, DataTable } from "react-native-paper";
import {
  WorkoutResultsContext,
  WorkoutResultsDispatchContext,
} from "../../store/contexts/WorkoutResultsContext";
import { useNavigation } from "@react-navigation/native";

const IconsCell = ({ exerciseId, setNumber }) => {
  const navigation = useNavigation();
  const [iconSize, setIconSize] = React.useState(20);

  const context = useContext(WorkoutResultsContext);
  const dispatch = useContext(WorkoutResultsDispatchContext);

  useEffect(() => {
    const screenWidth = Dimensions.get("window").width;
    const calculatedIconSize = screenWidth * 0.05;
    setIconSize(calculatedIconSize);
  }, []);

  onEditClick = () => {
    navigation.navigate("EditResultModalScreen", {
      exerciseId: exerciseId,
      setNumber: setNumber,
    });
  };

  onDeleteClick = () => {
    dispatch({
      type: "TABLE_ROW_RESULT_DELETED",
      payload: {
        exerciseId: exerciseId,
        setNumber: setNumber,
      },
    });
  };

  onDuplicateClick = () => {
    dispatch({
      type: "TABLE_ROW_RESULT_DUPLICATED",
      payload: {
        exerciseId: exerciseId,
        setNumber: setNumber,
      },
    });
  };

  return (
    <DataTable.Cell>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flex: 1,
        }}
      >
        <IconButton icon="pencil" size={iconSize} onPress={onEditClick} />
        <IconButton
          icon="content-copy"
          size={iconSize}
          onPress={onDuplicateClick}
        />
        <IconButton icon="delete" size={iconSize} onPress={onDeleteClick} />
      </View>
    </DataTable.Cell>
  );
};

export default IconsCell;
