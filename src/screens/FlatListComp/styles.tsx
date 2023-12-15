import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export interface Style {
  container: ViewStyle;
  cardContainer: ViewStyle;
  backgroundImage: ImageStyle;
  title: TextStyle;
  subtitle: TextStyle;
  pstitle: TextStyle;
  textContainer: ViewStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    width: ScreenWidth,
    height: ScreenHeight,
  },
  cardContainer: {
    flex: 1,
    width: ScreenWidth / 1.25,
    height: ScreenWidth / 1,
    marginHorizontal: 40,
    marginVertical: 20,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 10,
  },
  backgroundImage: {
    width: "100%",
    height: ScreenWidth / 1,
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    padding: 25,
    width: "100%",
  },
  title: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "400",
    marginBottom: 5,
  },
  pstitle: {
    fontSize: 35,
    color: "#ffffff",
    marginBottom: 5,
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
