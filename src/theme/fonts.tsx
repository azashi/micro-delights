import { useFonts } from "expo-font";

const APP_FONTS = {
  Regular: require("@/assets/fonts/Mukta-Regular.ttf"),
  Medium: require("@/assets/fonts/Mukta-Medium.ttf"),
  Bold: require("@/assets/fonts/Mukta-Bold.ttf"),
};

export const useAppFonts = () => {
  return useFonts(APP_FONTS);
};
