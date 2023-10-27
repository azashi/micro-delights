import { RootStackScreenProps } from "@/src/navigator/types";
import { useCallback, useState } from "react";
import { View, Pressable, Switch, ScrollView } from "react-native";
import { Text } from "@/src/components/Text";
import { COLORS } from "@/src/theme";
import { MumbaiPOI } from "./data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  FlipInEasyX,
  SequencedTransition,
} from "react-native-reanimated";

export const LayoutAnimationScreen: React.FC<
  RootStackScreenProps<"LayoutAnimation">
> = () => {
  const insets = useSafeAreaInsets();

  const [shown, setShown] = useState(true);

  const toggleShown = () => setShown((prev) => !prev);

  const [POI, setPOI] = useState(() => {
    return Array.from({ length: 2 }, (_, i) =>
      MumbaiPOI.map((p) => ({ ...p, id: p.id + i }))
    ).flat();
  });

  const renderItem = useCallback(
    ({ item, index }: { item: (typeof MumbaiPOI)[0]; index: number }) => {
      const removeItem = () =>
        setPOI((prev) => prev.filter((p) => p.id !== item.id));

      return (
        <Animated.View
          key={item.id}
          style={{
            backgroundColor: COLORS.surface,
            maxWidth: "50%",
          }}
          layout={SequencedTransition}
          // entering={FlipInEasyX.delay(200 * index)}
        >
          <Pressable onPress={removeItem} style={{ padding: 16 }}>
            <Text color="primary" variant="bold">
              {item.name}
            </Text>
            <Text variant="regular" color="secondary">
              {item.type}
            </Text>
          </Pressable>
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
        <Text style={{ marginTop: 6 }}>{`Show Elements`}</Text>

        <Switch value={shown} onChange={toggleShown} />
      </View>

      {/* {shown && (
        <Animated.FlatList
          data={POI}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 16,
          }}
          numColumns={2}
          columnWrapperStyle={{ gap: 16, flexWrap: "wrap" }}
          itemLayoutAnimation={SequencedTransition.duration(300)}
        />
      )} */}

      {shown && (
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 16,
            paddingHorizontal: 16,
          }}
        >
          {POI.map((p, i) => renderItem({ item: p, index: i }))}
        </ScrollView>
      )}
    </View>
  );
};
