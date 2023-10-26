import { NavigationProp } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackList = {
  Home: undefined;
  LayoutAnimation: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackList> =
  StackScreenProps<RootStackList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackList {}
  }
}

export type AppNavigator = NavigationProp<RootStackList>;
