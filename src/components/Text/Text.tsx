import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";

import { COLORS } from "@/src/theme";

export interface TextProps extends RNTextProps {
  variant?: "regular" | "medium" | "bold";
  color?: keyof typeof COLORS;
}

export const Text: React.FC<TextProps> = ({
  variant = "medium",
  color = "textDark",
  ...props
}) => {
  return (
    <RNText
      {...{
        ...props,
        style: [styles[variant], { color: COLORS[color] }, props.style],
      }}
    />
  );
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: "Regular",
    fontSize: 20,
    lineHeight: 24,
  },
  medium: {
    fontFamily: "Medium",
    fontSize: 22,
    lineHeight: 28,
  },
  bold: {
    fontFamily: "Bold",
    fontSize: 24,
    lineHeight: 30,
  },
});
