import { RootStackScreenProps } from "@/src/navigator/types";
import { useCallback, useState } from "react";
import { View, Switch, FlatList } from "react-native";
import { Text } from "@/src/components/Text";
import { COLORS } from "@/src/theme";
import { MumbaiPOI } from "./data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FlipInEasyX } from "react-native-reanimated";

export const LayoutAnimationScreen: React.FC<
  RootStackScreenProps<"LayoutAnimation">
> = () => {
  const [shown, setShown] = useState(true);

  const insets = useSafeAreaInsets();

  const toggleShown = () => setShown((prev) => !prev);

  const renderItem = useCallback(
    ({ item, index }: { item: (typeof MumbaiPOI)[0]; index: number }) => {
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
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingBottom: insets.bottom,
      }}
    >
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
        <Text style={{ marginTop: 6 }}>{`Show Layout`}</Text>

        <Switch value={shown} onChange={toggleShown} />
      </View>

      {shown && (
        <FlatList
          data={MumbaiPOI}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        />
      )}
    </View>
  );
};
