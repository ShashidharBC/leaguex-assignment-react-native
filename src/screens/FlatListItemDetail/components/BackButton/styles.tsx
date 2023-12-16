import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export interface Style {
  container: ViewStyle;
  titleStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: { flexDirection: "row", alignItems: "center" },
  titleStyle: { color: "#fff", fontSize: 22, fontWeight: "bold" },
});
