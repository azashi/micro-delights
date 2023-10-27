import { Layout } from "@/src/components/Layout";
import { POI, generatePOI } from "@/src/data/poi";
import { RootStackScreenProps } from "@/src/navigator/types";
import { COLORS } from "@/src/theme";
import { useCallback } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { Text } from "@/src/components/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const img = require("@/assets/mumbai.jpg");

// data for list
const POI_DATA = generatePOI(2);

// generate palindrome of colors
const _colors = ["#B6FFFA", "#98E4FF", "#80B3FF", "#687EFF"];
const colors = [..._colors, ...[..._colors].reverse().slice(1)];

// color input range for interpolation
const inputRange = Object.keys(colors).map(Number);

// as user scrolls, hero height decreases
const HeroHeight = {
  // scroll offset
  input: [0, 300],
  // hero height
  output: [300, 100],
};

const fabDisplay = {
  sheetUp: "none",
  // sheetDown:"none",
  sheetDown: "flex",
} as const;

// opacity output range
const fabOpacity = [0, 1];
// const fabOpacity = [1,1]

const fabWidthRange = {
  // is scroll active
  input: [0, 1],
  // fab width
  output: [150, 50],
  // output: [150, 150],
};

export const ScrollAnimationScreen: React.FC<
  RootStackScreenProps<"ScrollAnimation">
> = () => {
  const insets = useSafeAreaInsets();

  const flRef = useAnimatedRef<Animated.FlatList<POI>>();

  // track current scroll offset
  const scrollOffset = useSharedValue(0);

  // track if scroll is active
  const scrollOngoing = useSharedValue(0);

  // value of 1 will trigger scroll to top
  const shouldScroll = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onBeginDrag() {
      scrollOngoing.value = 1;
    },

    onScroll(event, context) {
      scrollOffset.value = event.contentOffset.y;
    },

    onEndDrag(event, context) {
      scrollOngoing.value = 0;
      shouldScroll.value = 0;
      // if (event.contentOffset.y < 300) {
      //   if (event.contentOffset.y < 100) {
      //     scrollOffset.value = 0;
      //   } else {
      //     scrollOffset.value = 300;
      //   }
      // }
    },
  });

  // for color interpolation
  const derivedOffest = useDerivedValue(() => {
    const _offset =
      Math.abs(Math.round(scrollOffset.value / 400)) % colors.length;
    return withTiming(_offset, { duration: 500 });
  });

  const animBgColor = useAnimatedStyle(() => {
    const _color = interpolateColor(derivedOffest.value, inputRange, colors);

    return { backgroundColor: _color };
  });

  const animHeight = useAnimatedStyle(() => {
    const _height = withTiming(
      interpolate(
        scrollOffset.value,
        HeroHeight.input,
        HeroHeight.output,
        Extrapolate.CLAMP
      )
    );

    return { height: _height };
  });

  useDerivedValue(() => {
    if (shouldScroll.value) {
      // scroll to top
      scrollTo(flRef, 0, 0, true);
    }
  });

  const fabStyle = useAnimatedStyle(() => {
    const display =
      scrollOffset.value < 300 ? fabDisplay.sheetUp : fabDisplay.sheetDown;
    const opacity = interpolate(
      scrollOffset.value,
      [200, 600],
      fabOpacity,
      Extrapolate.CLAMP
    );

    return { display, opacity };
  });

  const fabWidth = useAnimatedStyle(() => {
    return {
      width: withDelay(
        200,
        withTiming(
          interpolate(
            scrollOngoing.value,
            fabWidthRange.input,
            fabWidthRange.output
          )
        )
      ),
    };
  });

  const renderItem = useCallback(
    ({ item, index }: { item: POI; index: number }) => {
      return (
        <View
          key={item.id}
          style={{ backgroundColor: COLORS.surface, padding: 16 }}
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
        </View>
      );
    },
    []
  );

  return (
    <Layout style={{ paddingBottom: 0 }}>
      <Animated.View
        style={[
          { paddingTop: insets.top },
          styles.hero,
          animHeight,
          animBgColor,
        ]}
      >
        <Image source={img} style={styles.heroImg} contentFit="cover" />
        <View style={styles.heroTitle}>
          <Text variant="bold" color="textDark">
            {"Points of Interest"}
          </Text>
        </View>
      </Animated.View>
      <Animated.FlatList
        ref={flRef}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.list]}
        data={POI_DATA}
        renderItem={renderItem}
      />

      <Animated.View
        style={[
          { bottom: insets.bottom + 20 },
          styles.fabContainer,
          animBgColor,
          fabStyle,
        ]}
      >
        <Pressable onPress={() => (shouldScroll.value = 1)}>
          <Animated.View style={[styles.fabInner, fabWidth]}>
            <Icon name="chevron-up" size={32} />
            <Animated.View>
              <Text color="textDark" style={{ lineHeight: 38 }}>
                {"Scroll up"}
              </Text>
            </Animated.View>
          </Animated.View>
        </Pressable>
      </Animated.View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    paddingLeft: 16,
    position: "relative",
  },
  heroImg: {
    width: "120%",
    height: "100%",
    position: "absolute",
    left: -4,
    top: -4,
  },
  heroTitle: { flex: 1, justifyContent: "flex-end", paddingBottom: 4 },

  list: { paddingHorizontal: 16, gap: 16, paddingVertical: 24 },

  fabContainer: {
    position: "absolute",
    right: 16,
    borderRadius: 8,
  },
  fabInner: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    overflow: "hidden",
    paddingLeft: 10,
  },
});
