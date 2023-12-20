import {ScreenWidth} from '@rneui/base';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export interface Style {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {alignItems: 'center'},
  title: {fontWeight: 'bold', fontSize: 18, color: '#4CB9E7'},
  subtitle: {fontWeight: '400', fontSize: 30, color: 'black'},
});
