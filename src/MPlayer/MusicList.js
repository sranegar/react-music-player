import React, { useState, useEffect, useRef } from "react";
import "./music.css";

export default function MusicList(props) {
  let tracksEls = props.tracks.map((track) => (
    <div
      key={track.id}
      className={props.curPlaying.id == track.id ? "active" : "title"}
      onClick={() => {
        props.onSelected(track.id);
      }}
    >
      <span style={{ color: "#32a852" }}>{track.title}</span>
    </div>
  ));

  return <div>{tracksEls}</div>;
}
