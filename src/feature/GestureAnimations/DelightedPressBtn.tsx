import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "@/src/components/Text";
import { COLORS } from "@/src/theme";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

export interface DelightedPressButtonProps extends RectButtonProps {
  title?: string;
}

export const DelightedPressButton: React.FC<DelightedPressButtonProps> = ({
  title,
  ...rest
}) => {
  const [layout, setLayout] = useState({ height: 0, width: 0 });

  const pressState = useSharedValue(-1);

  const derivedPressState = useDerivedValue(() =>
    withTiming(
      interpolate(
        pressState.value,
        [-1, 0, 1],
        [-layout.width * 2, -layout.width, layout.width / 4],
        Extrapolate.CLAMP
      ),
      {
        duration: 400,
      }
    )
  );

  const underlayStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: derivedPressState.value }, { rotate: "70deg" }],
    };
  });

  const onPressIn = () => (pressState.value = 1);
  const onPressOut = () => (pressState.value = 0);

  return (
    <RectButton
      {...rest}
      style={[styles.container, rest.style]}
      activeOpacity={0}
      onActivated={onPressIn}
      onEnded={onPressOut}
    >
      <Animated.View
        style={[styles.underlay, underlayStyle]}
        onLayout={({
          nativeEvent: {
            layout: { height, width },
          },
        }) => setLayout({ height, width })}
      />
      <View style={{ paddingVertical: 10, paddingHorizontal: 16 }}>
        {!!title && (
          <Text color="surface" style={{ lineHeight: 36 }}>
            {title}
          </Text>
        )}
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
  },
  underlay: {
    position: "absolute",
    height: "120%",
    width: "120%",
    backgroundColor: COLORS.secondary,
  },
});
