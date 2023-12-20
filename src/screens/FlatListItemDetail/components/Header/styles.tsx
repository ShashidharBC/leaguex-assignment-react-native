import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export interface Style {
  container: ViewStyle;
  rightIconsContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  rightIconsContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
