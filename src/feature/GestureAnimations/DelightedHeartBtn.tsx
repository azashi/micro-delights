import { useState } from "react";
import { Pressable } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "@/src/theme";
import Animated, { BounceIn, ZoomOut } from "react-native-reanimated";

export const DelightedHeartButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => setLiked((prev) => !prev);

  return (
    <Pressable onPress={toggleLiked}>
      {liked ? (
        <Animated.View entering={BounceIn} exiting={ZoomOut}>
          <Icon size={48} name={"heart"} color={COLORS.secondary} />
        </Animated.View>
      ) : (
        <Icon size={48} name={"heart-outline"} color={COLORS.secondary} />
      )}
    </Pressable>
  );
};
