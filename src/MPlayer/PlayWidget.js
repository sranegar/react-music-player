import React, { useState, useEffect, useRef } from "react";

export default function PlayWidget(props) {
  const audioRef = useRef();

  return (
    <div>
      <audio
        controls
        ref={audioRef}
        src={props.currentTrack.url}
        onPlay={() => {
          setInterval(() => {
            let progress =
              audioRef.current.currentTime / audioRef.current.duration; //calculate duration
            props.setCurProgress(progress);
          }, 100); //ms
        }}
        onPause={() => {}}
      />
    </div>
  );
}
