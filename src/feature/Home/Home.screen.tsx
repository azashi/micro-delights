import { View, StyleSheet, Text, Button } from "react-native";
import { RootStackScreenProps } from "@/src/navigator/types";

export const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({
  navigation,
}) => {
  const goToLayoutAnimation = () => navigation.navigate("LayoutAnimation");

  return (
    <View style={styles.container}>
      <Button title="Gesture Animation" />
      <Button title="Layout Animation" onPress={goToLayoutAnimation} />
      <Button title="Scroll Animation" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: 24,
    gap: 24,
  },
});
