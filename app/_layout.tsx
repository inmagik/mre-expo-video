import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { VideoContext } from "@/context/VideoContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useVideoPlayer } from "expo-video";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const player = useVideoPlayer(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    (player) => {
      player.loop = true;
      player.play();
    }
  );

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <VideoContext.Provider value={{ video: player }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </VideoContext.Provider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
