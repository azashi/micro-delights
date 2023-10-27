import { View, StyleSheet, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Layout: React.FC<ViewProps> = ({ children, ...rest }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...rest}
      style={[styles.layout, { paddingBottom: insets.bottom }, rest.style]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
