import { createStackNavigator } from "@react-navigation/stack";

import type { RootStackList } from "./types";
import { HomeScreen } from "@/src/feature/Home";
import { LayoutAnimationScreen } from "@/src/feature/LayoutAnimations";
import { ScrollAnimationScreen } from "@/src/feature/ScrollAnimations/";
import { GestureAnimationScreen } from "@/src/feature/GestureAnimations";

export const RootStack = createStackNavigator<RootStackList>();

interface RootStackNavigatorProps {}

export const RootStackNavigator: React.FC<RootStackNavigatorProps> = ({}) => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{ headerShown: true, headerBackTitleVisible: false }}
      >
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Micro Delights" }}
        />
        <RootStack.Screen
          name="GestureAnimation"
          component={GestureAnimationScreen}
          options={{ title: "Gesture Animations" }}
        />
        <RootStack.Screen
          name="LayoutAnimation"
          component={LayoutAnimationScreen}
          options={{ title: "Layout Animations" }}
        />
        <RootStack.Screen
          name="ScrollAnimation"
          component={ScrollAnimationScreen}
          options={{ title: "Scroll Animations", headerShown: false }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
