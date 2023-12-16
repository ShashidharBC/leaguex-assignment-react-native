import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export interface Style {
  rightIconsContainer: ViewStyle;
  backgroundImage: ImageStyle;
  textContainer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  pstitle: TextStyle;
  backButtonContainer: ViewStyle;
  gameButtonContainer: ViewStyle;
  preOrderBtnContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  backgroundImage: {
    width: ScreenWidth,
    height: ScreenHeight,
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    bottom: ScreenWidth * 0.5,
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
  backButtonContainer: {
    position: "absolute",
    top: ScreenWidth * 0.2,
  },
  gameButtonContainer: {
    position: "absolute",
    right: ScreenWidth * 0.1,
    marginTop: 80,
  },
  preOrderBtnContainer: {
    position: "absolute",
    bottom: ScreenWidth * 0.2,
    alignSelf: "center",
  },
});
