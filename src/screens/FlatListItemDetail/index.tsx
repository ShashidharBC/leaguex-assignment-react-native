import {StatusBar} from 'expo-status-bar';
import {Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './components/Header';
import BackButton from './components/BackButton';
import PreOrderNowButton from './components/PreOrderNowButton';
import GamesButton from './components/GamesButton';
import styles from './styles';

export default function FlatListItemDetail({route, navigation}) {
  const {item} = route.params;
  return (
    <SafeAreaView>
      <View>
        <Header />
        <Image source={item.bgImgSource} style={styles.backgroundImage} />
        <View style={styles.backButtonContainer}>
          <BackButton onPress={() => navigation.goBack(null)} />
        </View>
        <View style={styles.gameButtonContainer}>
          <GamesButton />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.pstitle}>{item.psTitle}</Text>
        </View>
        <View style={styles.preOrderBtnContainer}>
          <PreOrderNowButton />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
