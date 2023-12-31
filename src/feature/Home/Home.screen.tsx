import { StyleSheet, Button } from "react-native";
import { RootStackScreenProps } from "@/src/navigator/types";
import { Layout } from "@/src/components/Layout";

export const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({
  navigation,
}) => {
  const goToGestureAnimation = () => navigation.navigate("GestureAnimation");
  const goToLayoutAnimation = () => navigation.navigate("LayoutAnimation");
  const goToScrollAnimation = () => navigation.navigate("ScrollAnimation");

  return (
    <Layout style={styles.container}>
      <Button title="Gesture Animation" onPress={goToGestureAnimation} />
      <Button title="Layout Animation" onPress={goToLayoutAnimation} />
      <Button title="Scroll Animation" onPress={goToScrollAnimation} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    padding: 24,
    gap: 24,
  },
});
