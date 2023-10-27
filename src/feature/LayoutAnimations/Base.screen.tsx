import { RootStackScreenProps } from "@/src/navigator/types";
import { useCallback, useState } from "react";
import { View, Switch, FlatList } from "react-native";
import { Text } from "@/src/components/Text";
import { COLORS } from "@/src/theme";
import { generatePOI, POI } from "@/src/data/poi";
import Animated, { FlipInEasyX } from "react-native-reanimated";
import { Layout } from "@/src/components/Layout";

const POI_DATA = generatePOI();

export const LayoutAnimationScreen: React.FC<
  RootStackScreenProps<"LayoutAnimation">
> = () => {
  const [shown, setShown] = useState(true);

  const toggleShown = () => setShown((prev) => !prev);

  const renderItem = useCallback(
    ({ item, index }: { item: POI; index: number }) => {
      return (
        <Animated.View
          key={item.id}
          style={{ backgroundColor: COLORS.surface, padding: 16 }}
          // entering={FlipInEasyX}
        >
          <Text color="primary" variant="bold">
            {item.name}
          </Text>
          <Text variant="regular" color="secondary">
            {item.type}
          </Text>
          <Text variant="medium" style={{ marginTop: 8 }}>
            {item.description}
          </Text>
        </Animated.View>
      );
    },
    []
  );

  return (
    <Layout>
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          marginBottom: 16,
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.textLight,
          paddingHorizontal: 24,
          paddingVertical: 8,
          justifyContent: "center",
        }}
      >
        <Text style={{ marginTop: 6 }}>{`Show Elements`}</Text>

        <Switch value={shown} onChange={toggleShown} />
      </View>

      {shown && (
        <FlatList
          data={POI_DATA}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        />
      )}
    </Layout>
  );
};
