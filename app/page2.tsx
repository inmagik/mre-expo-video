import { VideoContext } from "@/context/VideoContext";
import { Link } from "expo-router";
import { VideoView } from "expo-video";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Page2() {
  const { video } = useContext(VideoContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Page 2!</Text>
      <VideoView
        player={video!}
        style={{ width: "100%", height: 300, backgroundColor: "black" }}
        contentFit="contain"
        nativeControls
      />
      <Link href="/page1" replace>
        Go to page 1
      </Link>
    </View>
  );
}
