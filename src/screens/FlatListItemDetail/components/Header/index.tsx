import { TouchableOpacity, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.55 }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="ios-menu" size={30} color="#4CB9E7" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.1 }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="ios-game-controller" size={30} color="#4CB9E7" />
        </TouchableOpacity>
      </View>
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity style={{ marginHorizontal: 8 }} activeOpacity={0.7}>
          <Feather name="shopping-cart" size={30} color="#4CB9E7" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 8 }} activeOpacity={0.7}>
          <Ionicons name="ios-search" size={30} color="#4CB9E7" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
