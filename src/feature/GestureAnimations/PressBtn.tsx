import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "@/src/components/Text";
import { COLORS } from "@/src/theme";
import { StyleSheet, View } from "react-native";

export interface PressButtonProps extends RectButtonProps {
  title?: string;
}

export const PressButton: React.FC<PressButtonProps> = ({ title, ...rest }) => {
  return (
    <RectButton
      {...rest}
      style={[styles.container, rest.style]}
      // activeOpacity={1}
      // underlayColor={COLORS.secondary}
    >
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
});
