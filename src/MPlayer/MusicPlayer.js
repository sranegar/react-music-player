import React, { useState, useEffect, useRef } from "react";
import MusicList from "./MusicList.js";
import PlayWidget from "./PlayWidget.js";
import MusicVis from "./MusicVis.js";

export default function MusicPlayer(props) {
  const [tracks, setTracks] = useState([]);
  const [curPlaying, setCurplaying] = useState({});
  const [curProgress, setCurProgress] = useState(0);

  useEffect(() => {
    fetch("data/music.json")
      .then((response) => response.json())
      .then((data) => {
        //stub - todo, set data into property
        setTracks(data);
        console.log(data);
      });
  }, []);

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  const secondstyle = {
    color: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div>
      <h2 style={mystyle}>MUSIC PLAYER</h2>
      <div style={secondstyle}>Now Playing: {curPlaying.title}</div>
      <MusicList
        tracks={tracks}
        curPlaying={curPlaying}
        onSelected={(id) => {
          trackSelected(id);
        }}
      />
      <PlayWidget currentTrack={curPlaying} setCurProgress={setCurProgress} />
      <MusicVis size={50} progress={curProgress} />
    </div>
  );

  //"class methods"
  function trackSelected(id) {
    //find track
    const foundTrack = tracks.find((track) => track.id == id);
    console.log(foundTrack);
    //set as currently selected track - in this component
    setCurplaying(foundTrack);
  }
}
