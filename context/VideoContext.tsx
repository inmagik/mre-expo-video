import { VideoPlayer } from "expo-video";
import { createContext } from "react";

export const VideoContext = createContext<{ video: VideoPlayer | null }>({
  video: null,
});
