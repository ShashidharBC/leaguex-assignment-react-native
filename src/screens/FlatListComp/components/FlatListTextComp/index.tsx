import { Text, View } from "react-native";
import styles from "./styles";

export default function FlatListTextComp() {
  return (
    <View style={styles?.container}>
      <Text style={styles?.title}>GREAT GAMES</Text>
      <Text style={styles?.subtitle}>Coming Soon</Text>
    </View>
  );
}
