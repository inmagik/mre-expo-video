import { VideoContext } from "@/context/VideoContext";
import { Link } from "expo-router";
import { VideoView } from "expo-video";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Page1() {
  const { video } = useContext(VideoContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Page 1!</Text>
      <VideoView
        player={video!}
        style={{ width: "100%", height: 300, backgroundColor: "black" }}
        contentFit="contain"
        nativeControls
      />
      <Link href="/page2" replace>
        Go to page 2
      </Link>
    </View>
  );
}
