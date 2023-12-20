import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export default function PreOrderNowButton() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainerStyle}>
      <Text style={styles.buttonTitleStyle}>PRE ORDER NOW</Text>
    </TouchableOpacity>
  );
}
