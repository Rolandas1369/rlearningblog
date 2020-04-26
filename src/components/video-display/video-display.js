import React from "react";
import YouTube from "react-youtube";

export default class VideoDisplay extends React.Component {
  showVideo = (videoUrl, opts) => {
    if (videoUrl !== null && videoUrl !== undefined) {
      return <YouTube videoId={videoUrl} opts={opts} onReady={this._onReady} />;
    } else {
      return null;
    }
  };
  //https://youtu.be/ZvXskTArKKs?list=RDZvXskTArKKs
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    let videoUrl = this.props.item.video_src;

    let video = null;
    if (videoUrl === "") {
      video = null;
    } else {
      video = this.showVideo(videoUrl, opts);
    }

    return <div>{video}</div>;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
