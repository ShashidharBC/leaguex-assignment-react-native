import {TouchableOpacity, View, Image} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import styles from './styles';
import {
  GAME_CONTROLLER,
  IOS_MENU,
  SEARCH_IMAGE,
  SHOPING_CART,
} from '../../../../../assets/image';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.55}}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={IOS_MENU}
            style={{width: 35, height: 35, tintColor: '#4CB9E7'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.1}}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={GAME_CONTROLLER}
            style={{width: 35, height: 35, tintColor: '#4CB9E7'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity style={{marginHorizontal: 8}} activeOpacity={0.7}>
          <Image
            source={SHOPING_CART}
            style={{width: 35, height: 35, tintColor: '#4CB9E7'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 8}} activeOpacity={0.7}>
          <Image
            source={SEARCH_IMAGE}
            style={{width: 35, height: 35, tintColor: '#4CB9E7'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
