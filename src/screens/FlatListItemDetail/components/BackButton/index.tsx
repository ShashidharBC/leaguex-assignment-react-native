import {TouchableOpacity, View, Text, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import {BACK_IMAGE} from '../../../../../assets/image';

export default function BackButton({onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={BACK_IMAGE}
          style={{width: 22, height: 22, tintColor: '#fff'}}
        />
        <Text style={styles.titleStyle}>Back</Text>
      </View>
    </TouchableOpacity>
  );
}
