import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import FlatListTextComp from "./components/FlatListTextComp";
import {
  AVENGERS,
  CYBER_PUNK,
  DOOM,
  GHOST,
  PREDATOR,
  THE_LOST_OF_US,
} from "../../../assets/image";
import { FloatingActionComp } from "./components/FloatingActionComp";
import Header from "./components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import styles from "./styles";
import React from "react";
import { ScreenWidth, ScreenHeight } from "@rneui/base";

export default function FlatListComp({ navigation }) {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const DATA = [
    {
      id: 1,
      bgImgSource: CYBER_PUNK,
      title: "Cyberpunk 2077",
      subtitle: "Esclusive PlayStation",
      psTitle: "PS4",
    },
    {
      id: 2,
      bgImgSource: GHOST,
      title: "Ghost of Tsushima",
      subtitle: "Esclusive PlayStation",
      psTitle: "PS4",
    },
    {
      id: 3,
      bgImgSource: THE_LOST_OF_US,
      title: "The Last of Us Part 2",
      subtitle: "Esclusive PlayStation",
      psTitle: "PS4",
    },
    {
      id: 4,
      bgImgSource: PREDATOR,
      title: "Predator Hunting Grounds",
      subtitle: "Esclusive PlayStation",
      psTitle: "PS4",
    },
    {
      id: 5,
      bgImgSource: DOOM,
      title: "Predator Hunting Grounds",
      subtitle: "Esclusive PlayStation",
      psTitle: "PS4",
    },
    {
      id: 6,
      bgImgSource: AVENGERS,
      title: "Marvel Avengers",
      subtitle: "Esclusive PlayStation",
      psTitle: "PS4",
    },
  ];
  const renderFlatListTextComp = () => {
    return (
      <View style={{ alignSelf: "center", marginTop: 10 }}>
        <FlatListTextComp />
      </View>
    );
  };
  const renderFlatListItem = ({ item, index }) => {
    const inputRange = [(index - 1) * 50, index * 50, (index + 1) * 50];
    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, -200],
    });
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("FlatListItemDetail", { item: item })
        }
      >
        <View style={styles.cardContainer}>
          <View>
            <Animated.Image
              source={item.bgImgSource}
              style={{
                width: "100%",
                height: ScreenWidth / 1,
                resizeMode: "cover",
                transform: [
                  {
                    translateY,
                  },
                ],
              }}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.pstitle}>{item.psTitle}</Text>
          </View>

          <View style={styles.iconContainer}>
            <FloatingActionComp />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <ParallaxScrollView
          parallaxHeaderHeight={80}
          renderForeground={() => <>{renderFlatListTextComp()}</>}
          backgroundColor="#ffffff"
        >
          <View>
            <Animated.FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={renderFlatListItem}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
              )}
            />
          </View>
        </ParallaxScrollView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
