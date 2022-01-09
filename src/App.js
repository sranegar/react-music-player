import "./styles.css";
import React from "react";
import MusicPlayer from "./MPlayer/MusicPlayer.js";

export default class App extends React.Component {
  //create an array of components

  render() {
    return (
      <div className="App">
        <MusicPlayer />
      </div>
    );
  }
}
