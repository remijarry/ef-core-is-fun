import React from "react";
import { View, StyleSheet } from "react-native";
import { Switch, TextInput } from "react-native-paper";

const SwitchInput = ({ inputLabel, result, onSwitchChange, onTextChange }) => {
  const textInputRef = React.useRef(null);

  const handleSwitchChange = (newInputValue) => {
    onSwitchChange(inputLabel);
    if (newInputValue) {
      textInputRef.current && textInputRef.current.focus();
    }
  };

  return (
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
          value={result[inputLabel].enabled}
          onValueChange={handleSwitchChange}
        />
        <TextInput
          ref={textInputRef}
          style={{
            flex: 3,
          }}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          disabled={!result[inputLabel].enabled}
          mode="outlined"
          label={inputLabel}
          value={result[inputLabel].value}
          onChangeText={(text) => onTextChange(inputLabel, text)}
        />
      </View>
    </View>
  );
};

export default SwitchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    margin: 8,
  },
});
