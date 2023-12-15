import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function BackButton({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="chevron-back" size={34} color="#ffffff" />
        <Text style={styles.titleStyle}>Back</Text>
      </View>
    </TouchableOpacity>
  );
}
