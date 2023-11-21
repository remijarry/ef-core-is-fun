import React from "react";
import FullWidthBand from "./FullWidthBand";
import { List } from "react-native-paper";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoAccordion = ({ accordionTitle, accordionId, videoId }) => {
  return (
    <FullWidthBand>
      <List.Accordion
        left={(props) => <List.Icon {...props} icon="play-circle-outline" />}
        title={accordionTitle}
        id={accordionId}
      >
        <YoutubeEmbed videoId={videoId} />
      </List.Accordion>
    </FullWidthBand>
  );
};

export default VideoAccordion;
