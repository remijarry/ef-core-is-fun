import CombinedDefaultTheme from "./LightTheme";

const DefaultStyles = {
  container: {
    flex: 1,
    margin: 8,
  },
  title: {
    letterSpacing: 0.7,
  },
  headerTitleStyle: {
    letterSpacing: 0.7,
    color: CombinedDefaultTheme.colors.text,
    fontSize: 24,
  },
  workoutText: {
    padding: 8,
    fontSize: 17,
    letterSpacing: 0.5,
    lineHeight: 25,
  },
  subtitleBold: {
    padding: 8,
    fontSize: 17,
    letterSpacing: 0.5,
    lineHeight: 25,
    textTransform: "uppercase",
  }
};

export default DefaultStyles;
