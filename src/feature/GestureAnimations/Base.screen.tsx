import { Layout } from "@/src/components/Layout";
import { RootStackScreenProps } from "@/src/navigator/types";
import { DelightedPressButton } from "./DelightedPressBtn";
import { View } from "react-native";
import { PressButton } from "./PressBtn";
import { Text } from "@/src/components/Text";
import { PropsWithChildren } from "react";
import { HeartButton } from "./HeartBtn";
import { DelightedHeartButton } from "./DelightedHeartBtn";
import { LikeButton } from "./LikeBtn";
import { DelightedLikeButton } from "./DelightedLikeBtn";

export const GestureAnimationScreen: React.FC<
  RootStackScreenProps<"GestureAnimation">
> = () => {
  return (
    <Layout>
      <View style={{ paddingHorizontal: 16, paddingTop: 24, gap: 24 }}>
        <Row>
          <Text variant="medium" color="primary">
            {"Normal Pressables"}
          </Text>
          <Text variant="medium" color="textDark">
            {"Micro Delights"}
          </Text>
        </Row>

        <Row>
          <PressButton title="Amazing" />
          <DelightedPressButton title="Amazing" />
        </Row>

        <Spacer />

        <Row>
          <HeartButton />
          <DelightedHeartButton />
        </Row>

        <Spacer />

        <Row>
          <LikeButton />
          <DelightedLikeButton />
        </Row>
      </View>
    </Layout>
  );
};

interface RowProps extends PropsWithChildren {}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      {children}
    </View>
  );
};

const Spacer: React.FC = () => <View style={{ marginVertical: 18 }} />;
