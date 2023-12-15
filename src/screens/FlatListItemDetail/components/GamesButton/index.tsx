import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function GamesButton() {
  return (
    <View style={styles.container}>
      <View style={styles.roundedView}>
        <Ionicons name="game-controller" size={35} color="white" />
        <Text style={styles.text}>GAMES</Text>
      </View>
    </View>
  );
}
