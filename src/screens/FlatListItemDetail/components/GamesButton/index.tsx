import {View, Text, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import {GAME_CONTROLLER} from '../../../../../assets/image';

export default function GamesButton() {
  return (
    <View style={styles.container}>
      <View style={styles.roundedView}>
        <Image
          source={GAME_CONTROLLER}
          style={{width: 35, height: 35, tintColor: '#fff'}}
        />
        <Text style={styles.text}>GAMES</Text>
      </View>
    </View>
  );
}
