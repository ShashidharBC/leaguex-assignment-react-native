import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export interface Style {
  container: ViewStyle;
  text: TextStyle;
  roundedView: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    alignItems: "center",
  },
  roundedView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4CB9E7",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
