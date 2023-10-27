import { useState } from "react";
import { Pressable } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "@/src/theme";
import Animated, {
  BounceOutRight,
  RotateInUpLeft,
} from "react-native-reanimated";

export const DelightedLikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => setLiked((prev) => !prev);

  return (
    <Pressable onPress={toggleLiked}>
      {liked ? (
        <Animated.View
          entering={RotateInUpLeft.withInitialValues({
            transform: [
              { rotate: "45deg" },
              { translateX: 10 },
              { translateY: 10 },
            ],
          })}
          exiting={BounceOutRight}
        >
          <Icon size={48} name={"thumb-up"} color={COLORS.secondary} />
        </Animated.View>
      ) : (
        <Icon size={48} name={"thumb-up-outline"} color={COLORS.secondary} />
      )}
    </Pressable>
  );
};
