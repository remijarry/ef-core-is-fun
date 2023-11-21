import React, { useState, useCallback } from "react";
import { View, Alert } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import YoutubePlayer from "react-native-youtube-iframe";
import CombinedDefaultTheme from "../styling/LightTheme";

const YoutubeEmbed = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const onReady = () => {
    setIsLoading(() => false);
  };

  return (
    <View>
      {isLoading && (
        <ActivityIndicator
          animating={true}
          color={CombinedDefaultTheme.colors.navyBlue}
          style={{
            height: 212,
          }}
          size="large"
        />
      )}
      <YoutubePlayer
        onReady={onReady}
        height={isLoading ? 0 : 212}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default YoutubeEmbed;
