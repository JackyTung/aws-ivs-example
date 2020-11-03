import React, { useEffect, useRef } from 'react'

const StreamPlayer = (props) => {
    const { player } = props;
    const videoEl = useRef(null);

    useEffect(() => {
        if (player) {
            player.attachHTMLVideoElement(videoEl.current);
            player.load("https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8");
            player.play();
        }
    }, [player])

    return (
        <video
            id="video-player"
            ref={videoEl}
            playsInline
            autoPlay
            height={500}
            controls
        />
      )
}

export default StreamPlayer