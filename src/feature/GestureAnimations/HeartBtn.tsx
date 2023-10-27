import { useState } from "react";
import { Pressable } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "@/src/theme";

export const HeartButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => setLiked((prev) => !prev);

  return (
    <Pressable onPress={toggleLiked}>
      <Icon
        size={48}
        name={liked ? "heart" : "heart-outline"}
        color={COLORS.secondary}
      />
    </Pressable>
  );
};
