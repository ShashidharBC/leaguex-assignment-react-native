import {ScreenWidth} from '@rneui/base';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export interface Style {
  buttonContainerStyle: ViewStyle;
  buttonTitleStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  buttonContainerStyle: {
    width: ScreenWidth - 100,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: '#4CB9E7',
  },
  buttonTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    letterSpacing: 0.5,
    color: '#FFFFFF',
  },
});
