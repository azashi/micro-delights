import { StyleSheet, Button } from "react-native";
import { RootStackScreenProps } from "@/src/navigator/types";
import { Layout } from "@/src/components/Layout";

export const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({
  navigation,
}) => {
  const goToLayoutAnimation = () => navigation.navigate("LayoutAnimation");

  return (
    <Layout style={styles.container}>
      <Button title="Gesture Animation" />
      <Button title="Layout Animation" onPress={goToLayoutAnimation} />
      <Button title="Scroll Animation" />
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
