import { useState } from "react";
import { Pressable } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "@/src/theme";

export const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => setLiked((prev) => !prev);

  return (
    <Pressable onPress={toggleLiked}>
      <Icon
        size={48}
        name={liked ? "thumb-up" : "thumb-up-outline"}
        color={COLORS.secondary}
      />
    </Pressable>
  );
};
