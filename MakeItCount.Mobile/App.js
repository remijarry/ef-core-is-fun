import "react-native-gesture-handler";
import "react-native-get-random-values"; // to be able to generate UUIDs
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";
import StackNavigation from "./src/navigation/StackNavigation";
import CombinedDefaultTheme from "./src/styling/LightTheme";
import { WorkoutResultsProvider } from "./src/store/contexts/WorkoutResultsContext";

export default function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <WorkoutResultsProvider>
        <View style={styles.container}>
          <StackNavigation />
          <StatusBar style="light" />
        </View>
      </WorkoutResultsProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
